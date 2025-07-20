import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import dramaticLandscape from "@/assets/dramatic-landscape.jpg";
import { Navigation } from "./Navigation";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Navigation />
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${dramaticLandscape})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-light mb-8 leading-tight">
            Alternativ investering med
            <span className="block font-bold">balanserad risk</span>
          </h1>
          
          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-xl md:text-2xl font-light opacity-90 leading-relaxed">
              NordSpan är en alternativ investeringsfond som kombinerar säkerställda direktlån 
              med investeringar i tillväxtbolag för stabil avkastning.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="dramatic" className="min-w-64">
              Jag vill investera
              <span className="block text-sm font-normal opacity-80">Klicka här för att komma i kontakt</span>
            </Button>
            <Button variant="dramatic-outline" className="min-w-64">
              Läs mer om fonden
              <span className="block text-sm font-normal opacity-80">Investeringsmemorandum och villkor</span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ArrowRight className="w-6 h-6 rotate-90" />
      </div>
    </section>
  );
};