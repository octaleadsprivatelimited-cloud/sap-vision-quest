import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
// import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { TrustedBySection } from "@/components/sections/TrustedBySection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
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
        <WhyChooseUsSection />
        {/* <SolutionsSection /> */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
