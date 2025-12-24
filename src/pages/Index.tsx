import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { TrustedBySection } from "@/components/sections/TrustedBySection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { TrainingHighlightsSection } from "@/components/sections/TrainingHighlightsSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <TrustedBySection />
        <FeaturesSection />
        <StatsSection />
        <WhyChooseUsSection />
        <SolutionsSection />
        <TrainingHighlightsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
