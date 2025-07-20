import { HeroSection } from "@/components/HeroSection";
import { PerformanceSection } from "@/components/PerformanceSection";
import { AboutSection } from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PerformanceSection />
      <AboutSection />
    </div>
  );
};

export default Index;
