import { AboutSection } from "@/components/sections/about";
import { FooterCtaSection } from "@/components/sections/footer-cta";
import { GallerySection } from "@/components/sections/gallery";
import { HeroSection } from "@/components/sections/hero";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { TripsSection } from "@/components/sections/trips";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0f0f17] text-white">
      <main className="mx-auto flex max-w-[1280px] flex-col gap-24 px-4 pb-24 pt-20 sm:px-6 lg:px-8">
        <HeroSection />
        <AboutSection />
        <TripsSection />
        <GallerySection />
        <TestimonialsSection />
      </main>
      <FooterCtaSection />
    </div>
  );
}
