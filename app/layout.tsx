import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import "./mobile-fixes.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Ecstacee — Abdulmuiz Ademola Abdulkabir",
  description:
    "Software Engineer and Fluid Developer building at the intersection of software, blockchain, and real-world problems.",
  openGraph: {
    title: "Ecstacee — Software Engineer & Fluid Developer",
    description:
      "Projects, experience, achievements, leadership, skills and links from Abdulmuiz Ademola Abdulkabir.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${space.variable}`}>{children}</body>
    </html>
  );
}
