import MediaFix from "@/components/MediaFix";
import PortfolioClient from "@/components/PortfolioClient";
import ResumeLinkGuard from "@/components/ResumeLinkGuard";

export default function Home() {
  return (
    <>
      <ResumeLinkGuard />
      <MediaFix />
      <PortfolioClient />
    </>
  );
}
