import { WorkDetailPage } from "@/components/work-detail-page"
import { customerSuccessDetail } from "@/lib/work-details"

export default function CustomerSuccessPage() {
  return <WorkDetailPage detail={customerSuccessDetail} basePath="/works/customer-success" />
}
