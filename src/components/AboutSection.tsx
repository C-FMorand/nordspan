import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const AboutSection = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              {t('about.philosophy.title')}
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg">
                {t('about.philosophy.desc1')}
              </p>
              <p>
                {t('about.philosophy.desc2')}
              </p>
              <p>
                {t('about.philosophy.desc3')}
              </p>
            </div>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-financial-light rounded-full"></div>
                <span>{t('about.philosophy.point1')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-financial-light rounded-full"></div>
                <span>{t('about.philosophy.point2')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-financial-light rounded-full"></div>
                <span>{t('about.philosophy.point3')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-financial-light rounded-full"></div>
                <span>{t('about.philosophy.point4')}</span>
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div>
            <Card className="p-8">
              <CardContent className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{t('about.contact.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('about.contact.subtitle')}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-financial-light/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-financial-light" />
                    </div>
                    <div>
                      <div className="font-medium">{t('about.contact.phone')}</div>
                      <div className="text-muted-foreground">+46 8 123 456 78</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-financial-light/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-financial-light" />
                    </div>
                    <div>
                      <div className="font-medium">{t('about.contact.email')}</div>
                      <div className="text-muted-foreground">info@cooachequity.se</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-financial-light/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-financial-light" />
                    </div>
                    <div>
                      <div className="font-medium">{t('about.contact.office')}</div>
                      <div className="text-muted-foreground">
                        Kungsgatan 12<br />
                        111 35 Stockholm
                      </div>
                    </div>
                  </div>
                </div>

                <Button variant="dramatic" className="w-full mt-6">
                  {t('about.contact.cta')}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};