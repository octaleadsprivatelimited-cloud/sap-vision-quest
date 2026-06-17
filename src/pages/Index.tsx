import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustedBySection } from "@/components/sections/TrustedBySection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { SuccessStoriesSection } from "@/components/sections/SuccessStoriesSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";

const Index = () => {
  const seo = useSEO();
  
  return (
    <div className="min-h-screen bg-background">
      <SEO {...seo} />
      <Navbar />
      <main>
        <HeroSection />
        <TrustedBySection />
        <FeaturesSection />
        <WhyChooseUsSection />
        <SuccessStoriesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
