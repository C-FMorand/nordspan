import { Navigation } from "@/components/Navigation";
import { useLanguage } from "@/contexts/LanguageContext";

export const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            {t('about.page.title')}
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
            <p>{t('about.page.paragraph1')}</p>
            <p>{t('about.page.paragraph2')}</p>
            <p>{t('about.page.paragraph3')}</p>
            <p>{t('about.page.paragraph4')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};