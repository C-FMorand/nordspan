import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 p-6">
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
          <img 
            src="/lovable-uploads/c7938e9d-bda2-4e61-ad5a-58d723dd3ca1.png" 
            alt="Cooach Equity" 
            className="h-12 w-auto filter drop-shadow-lg"
            onError={(e) => console.log('Logo failed to load:', e)}
            onLoad={() => console.log('Logo loaded successfully')}
          />
        </Link>
        
        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-white hover:bg-white/20 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </Button>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-warm-accent transition-colors">
            {t('nav.home')}
          </Link>
          <Link to="/investeringar" className="text-white hover:text-warm-accent transition-colors">
            {t('nav.investments')}
          </Link>
          <Link to="/team" className="text-white hover:text-warm-accent transition-colors">
            {t('nav.team')}
          </Link>
          <Link to="/performance" className="text-white hover:text-warm-accent transition-colors">
            Performance
          </Link>
          
          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <Globe className="w-4 h-4 mr-2" />
                {languages.find(lang => lang.code === language)?.flag}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {languages.map((lang) => (
                <DropdownMenuItem 
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={language === lang.code ? "bg-muted" : ""}
                >
                  <span className="mr-2">{lang.flag}</span>
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button variant="dramatic-outline" size="sm" asChild>
            <Link to="/contact">{t('nav.contact')}</Link>
          </Button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-sm p-6 mt-2 rounded-lg mx-6">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-white hover:text-warm-accent transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/investeringar" 
              className="text-white hover:text-warm-accent transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.investments')}
            </Link>
            <Link 
              to="/team" 
              className="text-white hover:text-warm-accent transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.team')}
            </Link>
            <Link 
              to="/performance" 
              className="text-white hover:text-warm-accent transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Performance
            </Link>
            
            {/* Mobile Language Switcher */}
            <div className="pt-4 border-t border-white/20">
              <p className="text-white/70 text-sm mb-2">Language / Språk / Idioma</p>
              <div className="flex gap-2">
                {languages.map((lang) => (
                  <Button
                    key={lang.code}
                    variant={language === lang.code ? "secondary" : "ghost"}
                    size="sm"
                    onClick={() => setLanguage(lang.code)}
                    className="text-white hover:bg-white/20"
                  >
                    <span className="mr-1">{lang.flag}</span>
                    {lang.code.toUpperCase()}
                  </Button>
                ))}
              </div>
            </div>
            
            <Button variant="dramatic-outline" size="sm" className="mt-4" asChild>
              <Link to="/contact" onClick={() => setIsOpen(false)}>{t('nav.contact')}</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};