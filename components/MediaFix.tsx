"use client";

import { useEffect } from "react";

const ORIGINAL_RESUME = "/resume/Abdulkabir-Abdulmuiz-ADEMOLA-CV.pdf";
const REQUIRED_MEDIA = [
  "/images/working-detail.webp",
  "/images/web3bridge.webp",
  "/images/web3lagos.webp",
];

function loadImage(src: string) {
  return new Promise<boolean>((resolve) => {
    const image = new Image();
    image.onload = () => resolve(true);
    image.onerror = () => resolve(false);
    image.src = src;
  });
}

function replaceImage(alt: string, src: string) {
  const image = document.querySelector<HTMLImageElement>(`img[alt="${alt}"]`);
  if (!image) return;
  image.removeAttribute("srcset");
  image.removeAttribute("sizes");
  image.src = src;
}

export default function MediaFix() {
  useEffect(() => {
    let cancelled = false;

    const applyMediaFix = async () => {
      const mediaReady = (await Promise.all(REQUIRED_MEDIA.map(loadImage))).every(Boolean);
      if (cancelled || !mediaReady) return;

      document.documentElement.classList.add("media-fix-ready");

      replaceImage("Working on a laptop", "/images/working-detail.webp");
      replaceImage("Abdulmuiz at Web3Bridge", "/images/web3bridge.webp");
      replaceImage("Abdulmuiz at a student event", "/images/web3lagos.webp");

      const style = document.createElement("style");
      style.dataset.mediaFix = "true";
      style.textContent = `
        .media-fix-ready .brand-avatar { display: none !important; }
        .media-fix-ready .moments-grid { grid-template-columns: 1fr !important; }
        .media-fix-ready .moment-a { min-height: 520px; }
        .media-fix-ready .moment-b,
        .media-fix-ready .moment-c { display: none !important; }
        .media-fix-ready .moment-a img { object-position: center 35% !important; }
      `;
      document.head.appendChild(style);
    };

    const patchResume = async () => {
      try {
        const response = await fetch(ORIGINAL_RESUME, { method: "HEAD", cache: "no-store" });
        if (!response.ok || cancelled) return;

        document.querySelectorAll<HTMLAnchorElement>("a[href]").forEach((anchor) => {
          if (
            anchor.href.includes("Abdulmuiz-Ademola-Abdulkabir-Resume.pdf") ||
            anchor.href.includes("drive.google.com/drive/folders/15t37yIj0kk313PTxtiR2GnG4tjV1sGKo")
          ) {
            anchor.href = ORIGINAL_RESUME;
            anchor.target = "_blank";
            anchor.rel = "noreferrer";
          }
        });
      } catch {
        // Keep the current link until the original resume file has been uploaded.
      }
    };

    void applyMediaFix();
    void patchResume();

    return () => {
      cancelled = true;
      document.documentElement.classList.remove("media-fix-ready");
      document.querySelector("style[data-media-fix='true']")?.remove();
    };
  }, []);

  return null;
}
