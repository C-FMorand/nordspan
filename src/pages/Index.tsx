import { HeroSection } from "@/components/HeroSection";
import { MinimalistAbout } from "@/components/MinimalistAbout";
import { InvestmentProcessSection } from "@/components/InvestmentProcessSection";
import { PortfolioSection } from "@/components/PortfolioSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MinimalistAbout />
      <InvestmentProcessSection />
      <PortfolioSection />
    </div>
  );
};

export default Index;
