import { ServiceDetailPage } from "@/components/service-detail-page"
import { motionBrandDetail } from "@/lib/service-details"

export default function MotionBrandIdentityPage() {
  return <ServiceDetailPage detail={motionBrandDetail} basePath="/services/motion-brand-identity" />
}
