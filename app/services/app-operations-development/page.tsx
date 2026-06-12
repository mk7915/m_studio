import { ServiceDetailPage } from "@/components/service-detail-page"
import { appDevDetail } from "@/lib/service-details"

export default function AppOperationsDevelopmentPage() {
  return <ServiceDetailPage detail={appDevDetail} basePath="/services/app-operations-development" />
}
