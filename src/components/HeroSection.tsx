import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import dramaticLandscape from "@/assets/dramatic-landscape.jpg";
import { Navigation } from "./Navigation";
import { useLanguage } from "@/contexts/LanguageContext";

export const HeroSection = () => {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Navigation />
      
      {/* Background Image with enhanced overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${dramaticLandscape})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/60 to-black/80"></div>
        <div className="absolute inset-0 bg-primary/20"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium mb-8 leading-tight tracking-tight animate-fade-in">
            {t('hero.title.part1')}
            <span className="block font-bold italic text-warm-accent">{t('hero.title.part2')}</span>
          </h1>
          
          <div className="max-w-3xl mx-auto mb-16 animate-fade-in">
            <p className="text-lg md:text-xl font-light opacity-90 leading-relaxed text-center">
              {t('hero.subtitle')}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button asChild variant="default" size="lg" className="min-w-56 h-14 text-lg font-medium">
              <Link to="/invest">{t('hero.cta.invest')}</Link>
            </Button>
            <Button asChild variant="dramatic-outline" size="lg" className="min-w-56 h-14 text-lg font-medium">
              <Link to="/about">{t('hero.cta.learn')}</Link>
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