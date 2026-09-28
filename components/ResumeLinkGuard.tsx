"use client";

import { useEffect } from "react";

const PUBLIC_RESUME = "/resume/Abdulmuiz-Ademola-Abdulkabir-Resume.pdf";
const OLD_RESUME_FOLDER = "drive.google.com/drive/folders/15t37yIj0kk313PTxtiR2GnG4tjV1sGKo";

export default function ResumeLinkGuard() {
  useEffect(() => {
    document.querySelectorAll<HTMLAnchorElement>("a[href]").forEach((anchor) => {
      if (anchor.href.includes(OLD_RESUME_FOLDER)) {
        anchor.href = PUBLIC_RESUME;
        anchor.target = "_blank";
        anchor.rel = "noreferrer";
      }
    });
  }, []);

  return null;
}
