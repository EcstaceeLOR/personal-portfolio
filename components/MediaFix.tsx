"use client";

import { useEffect } from "react";

const ORIGINAL_RESUME = "/resume/Abdulkabir-Abdulmuiz-ADEMOLA-CV.pdf";

const ORIGINAL_MEDIA: Array<{ alt: string; src: string }> = [
  { alt: "Portrait of Abdulmuiz Ademola Abdulkabir", src: "/images/hero.jpg" },
  { alt: "Abdulmuiz outdoors", src: "/images/about.jpg" },
  { alt: "Working on a laptop", src: "/images/working-detail.jpg" },
  { alt: "Abdulmuiz working on a laptop at Web3Bridge", src: "/images/working.jpg" },
  { alt: "Abdulmuiz at Web3Bridge", src: "/images/web3bridge.jpg" },
  { alt: "Abdulmuiz speaking at a student event", src: "/images/speaking.jpg" },
  { alt: "Abdulmuiz at a student event", src: "/images/web3lagos.jpg" },
  { alt: "Ecstacee avatar", src: "/images/avatar.jpg" },
  { alt: "Ecstacee avatar artwork", src: "/images/avatar.jpg" },
];

function loadImage(src: string) {
  return new Promise<boolean>((resolve) => {
    const image = new Image();
    image.onload = () => resolve(true);
    image.onerror = () => resolve(false);
    image.src = src;
  });
}

function replaceImages(alt: string, src: string) {
  document.querySelectorAll<HTMLImageElement>(`img[alt="${alt}"]`).forEach((image) => {
    image.removeAttribute("srcset");
    image.removeAttribute("sizes");
    image.removeAttribute("loading");
    image.style.filter = "none";
    image.style.imageRendering = "auto";
    image.src = src;
  });
}

export default function MediaFix() {
  useEffect(() => {
    let cancelled = false;

    const applyOriginalMedia = async () => {
      const results = await Promise.all(
        ORIGINAL_MEDIA.map(async (media) => ({ ...media, ready: await loadImage(media.src) })),
      );
      if (cancelled) return;

      let replaced = 0;
      results.forEach((media) => {
        if (!media.ready) return;
        replaceImages(media.alt, media.src);
        replaced += 1;
      });

      if (replaced > 0) {
        document.documentElement.classList.add("original-media-ready");
      }

      const style = document.createElement("style");
      style.dataset.mediaFix = "true";
      style.textContent = `
        .brand-avatar { display: none !important; }
        .moments-grid { grid-template-columns: 1fr !important; }
        .moment-a { min-height: 520px; }
        .moment-b,
        .moment-c { display: none !important; }
        .moment-a img { object-position: center 35% !important; }
        .original-media-ready img { image-rendering: auto !important; }
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
        // Keep the current link if the original resume is unavailable.
      }
    };

    void applyOriginalMedia();
    void patchResume();

    return () => {
      cancelled = true;
      document.documentElement.classList.remove("original-media-ready");
      document.querySelector("style[data-media-fix='true']")?.remove();
    };
  }, []);

  return null;
}
