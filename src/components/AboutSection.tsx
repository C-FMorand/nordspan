import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Investeringsfilosofi
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg">
                NordSpan bygger en långsiktig investeringsportfölj med balanserad riskprofil 
                genom att kombinera kassaflödesgenererande direktlån med övervakade tillväxtinvesteringar.
              </p>
              <p>
                Vår strategi ger en målsatt årlig kassaflödesbaserad utdelning om 6%, 
                samtidigt som vi bibehåller uppsidepotential från equity-investeringar.
              </p>
              <p>
                Fonden emitterar upp till 100 000 preferensaktier à 100 SEK med kvartalsvis 
                utdelning om 8% per år, varav 6% bedöms kassaflödesbaserad.
              </p>
            </div>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-financial-light rounded-full"></div>
                <span>Säkerställda direktlån med 12% målavkastning</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-financial-light rounded-full"></div>
                <span>Monitorerade tillväxtbolag (minimum 12 månader)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-financial-light rounded-full"></div>
                <span>Kvartalsvis rapportering och värdering</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-financial-light rounded-full"></div>
                <span>Planerad notering på NGM Nordic AIF 2026</span>
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div>
            <Card className="p-8">
              <CardContent className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">Kontakta oss</h3>
                  <p className="text-muted-foreground">
                    Kontakta vårt team för mer information
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-financial-light/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-financial-light" />
                    </div>
                    <div>
                      <div className="font-medium">Telefon</div>
                      <div className="text-muted-foreground">+46 8 123 456 78</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-financial-light/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-financial-light" />
                    </div>
                    <div>
                      <div className="font-medium">E-post</div>
                      <div className="text-muted-foreground">info@nordspan.se</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-financial-light/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-financial-light" />
                    </div>
                    <div>
                      <div className="font-medium">Kontor</div>
                      <div className="text-muted-foreground">
                        Kungsgatan 12<br />
                        111 35 Stockholm
                      </div>
                    </div>
                  </div>
                </div>

                <Button variant="dramatic" className="w-full mt-6">
                  Boka ett möte
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};