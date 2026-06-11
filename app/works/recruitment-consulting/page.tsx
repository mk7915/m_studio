import { WorkDetailPage } from "@/components/work-detail-page"
import { recruitmentDetail } from "@/lib/work-details"

export default function RecruitmentConsultingPage() {
  return <WorkDetailPage detail={recruitmentDetail} basePath="/works/recruitment-consulting" />
}
