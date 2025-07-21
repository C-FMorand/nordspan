import { Navigation } from "@/components/Navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Calendar } from "lucide-react";

export const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      title: t('contact.phone.title'),
      content: "+46 8 123 456 78",
      action: "tel:+46812345678"
    },
    {
      icon: Mail,
      title: t('contact.email.title'),
      content: "invest@nordspan.se",
      action: "mailto:invest@nordspan.se"
    },
    {
      icon: MapPin,
      title: t('contact.office.title'),
      content: "Stureplan 4, 114 35 Stockholm",
      action: "https://maps.google.com"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-6">{t('contact.info.title')}</h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <info.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">{info.title}</h3>
                          <a 
                            href={info.action}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.content}
                          </a>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">{t('contact.meeting.title')}</h3>
                    <p className="text-muted-foreground">{t('contact.meeting.description')}</p>
                  </div>
                </div>
                <Button className="w-full">
                  {t('contact.meeting.cta')}
                </Button>
              </Card>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>{t('contact.form.title')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">{t('contact.form.firstName')}</Label>
                    <Input id="firstName" placeholder={t('contact.form.firstName.placeholder')} />
                  </div>
                  <div>
                    <Label htmlFor="lastName">{t('contact.form.lastName')}</Label>
                    <Input id="lastName" placeholder={t('contact.form.lastName.placeholder')} />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">{t('contact.form.email')}</Label>
                  <Input id="email" type="email" placeholder={t('contact.form.email.placeholder')} />
                </div>
                
                <div>
                  <Label htmlFor="company">{t('contact.form.company')}</Label>
                  <Input id="company" placeholder={t('contact.form.company.placeholder')} />
                </div>
                
                <div>
                  <Label htmlFor="investmentAmount">{t('contact.form.investment')}</Label>
                  <Input id="investmentAmount" placeholder={t('contact.form.investment.placeholder')} />
                </div>
                
                <div>
                  <Label htmlFor="message">{t('contact.form.message')}</Label>
                  <Textarea 
                    id="message" 
                    placeholder={t('contact.form.message.placeholder')}
                    rows={4}
                  />
                </div>
                
                <Button className="w-full" size="lg">
                  {t('contact.form.submit')}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};