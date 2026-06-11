import { WorkDetailProjectsPage } from "@/components/work-detail-projects-page"
import { webDevelopmentDetail } from "@/lib/work-details"

export default function WebDevelopmentPage() {
  return <WorkDetailProjectsPage detail={webDevelopmentDetail} basePath="/works/web-development" />
}
