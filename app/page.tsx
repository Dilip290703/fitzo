import { CTA } from "@/components/CTA";
import { ExperiencePreview } from "@/components/ExperiencePreview";
import { FeaturedStores } from "@/components/FeaturedStores";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
import { Testimonials } from "@/components/Testimonials";
import { TrustStrip } from "@/components/TrustStrip";
import { ValueProposition } from "@/components/ValueProposition";

export default function HomePage() {
  return (
    <main className="page-shell min-h-screen">
      <Navbar />
      <Hero />
      <TrustStrip />
      <HowItWorks />
      <FeaturedStores />
      <ValueProposition />
      <ExperiencePreview />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
