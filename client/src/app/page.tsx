import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { CommunitySection } from "@/components/community-section"
import { AIDemoSection } from "@/components/ai-demo-section"
import { VisionSection } from "@/components/vision-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <CommunitySection />
      <AIDemoSection />
      <VisionSection />
      <CTASection />
      <Footer />
    </main>
  )
}
