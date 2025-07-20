import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-financial-blue/90 to-financial-blue/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Meridian Capital
            <span className="block text-financial-light">Investment Fund</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            Delivering exceptional returns through strategic investments and institutional-grade portfolio management since 2010.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="financial" size="lg" className="min-w-48">
              View Fund Performance
              <TrendingUp className="ml-2" />
            </Button>
            <Button variant="financial-outline" size="lg" className="min-w-48">
              Download Prospectus
              <ArrowRight className="ml-2" />
            </Button>
          </div>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="backdrop-blur-sm bg-white/10 rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-financial-light mb-2">$2.4B</div>
              <div className="text-sm opacity-80">Assets Under Management</div>
            </div>
            <div className="backdrop-blur-sm bg-white/10 rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-financial-light mb-2">12.8%</div>
              <div className="text-sm opacity-80">5-Year Average Return</div>
            </div>
            <div className="backdrop-blur-sm bg-white/10 rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-financial-light mb-2">AAA</div>
              <div className="text-sm opacity-80">Credit Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};