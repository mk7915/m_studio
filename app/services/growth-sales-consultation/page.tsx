import { ServiceDetailPage } from "@/components/service-detail-page"
import { growthSalesDetail } from "@/lib/service-details"

export default function GrowthSalesConsultationPage() {
  return <ServiceDetailPage detail={growthSalesDetail} basePath="/services/growth-sales-consultation" />
}
