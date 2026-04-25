import { Header } from "@/components/landing/header"
import { HeroSplit } from "@/components/landing/hero-split"
import { HowItWorks } from "@/components/landing/how-it-works"
import { WhySection } from "@/components/landing/why-section"
import { DemoSection } from "@/components/landing/demo-section"
import { OFuturoSection } from "@/components/landing/o-futuro-section"
import { Footer } from "@/components/landing/footer"
import { GlobalFallingBackground } from "@/components/landing/global-falling-background"

export default function HomePage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <GlobalFallingBackground />
      <div className="relative z-10">
        <Header />
        <HeroSplit />
        <HowItWorks />
        <WhySection />
        <DemoSection />
        <OFuturoSection />
        <Footer />
      </div>
    </main>
  )
}
