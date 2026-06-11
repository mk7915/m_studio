import { WorkDetailVideoProjectsPage } from "@/components/work-detail-video-projects-page"
import { videoMarketingDetail } from "@/lib/work-details"

export default function VideoMarketingPage() {
  return <WorkDetailVideoProjectsPage detail={videoMarketingDetail} basePath="/works/video-marketing" />
}
