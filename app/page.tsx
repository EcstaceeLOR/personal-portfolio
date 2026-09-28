import PortfolioClient from "@/components/PortfolioClient";
import ResumeLinkGuard from "@/components/ResumeLinkGuard";

export default function Home() {
  return (
    <>
      <ResumeLinkGuard />
      <PortfolioClient />
    </>
  );
}
