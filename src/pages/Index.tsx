import { HeroSection } from "@/components/HeroSection";
import { MinimalistAbout } from "@/components/MinimalistAbout";
import { PortfolioSection } from "@/components/PortfolioSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MinimalistAbout />
      <PortfolioSection />
    </div>
  );
};

export default Index;
