import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TrustedBySection } from "@/components/sections/TrustedBySection";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <TrustedBySection />
        <SolutionsSection />
        <StatsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
