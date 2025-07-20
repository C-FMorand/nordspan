import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { TrendingUp, Shield, Target, DollarSign } from "lucide-react";

export const Investeringar = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-light mb-8">
              Vår <span className="font-bold">investeringsstrategi</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              NordSpan kombinerar säkerställda direktlån med strategiska tillväxtinvesteringar 
              för att skapa balanserad avkastning med reducerad risk.
            </p>
          </div>

          {/* Investment Strategy Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <Card className="p-8">
              <CardContent>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-warm-accent/10 rounded-lg flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-warm-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">Säkerställda direktlån</h3>
                    <div className="text-warm-accent font-semibold">50% av portföljen</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Målavkastning:</span>
                    <span className="font-semibold text-warm-accent">12% årligen</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Säkerhet:</span>
                    <span className="font-semibold">Säkerställda lån</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Kassaflöde:</span>
                    <span className="font-semibold">Kvartalsvis</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mt-6">
                  Direktlån ger stabila kassaflöden som möjliggör regelbunden utdelning till investerare. 
                  Lånen kan i vissa fall kombineras med optioner att konvertera till aktier.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-warm-accent/10 rounded-lg flex items-center justify-center mr-4">
                    <TrendingUp className="w-6 h-6 text-warm-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">Tillväxtbolag</h3>
                    <div className="text-warm-accent font-semibold">50% av portföljen</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Monitoreringskrav:</span>
                    <span className="font-semibold">Minimum 12 månader</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Fokus:</span>
                    <span className="font-semibold">Onoterade bolag</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Riskhantering:</span>
                    <span className="font-semibold">Strukturerad uppföljning</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mt-6">
                  Investeringar i tillväxtbolag som vi följt och analyserat under en längre period 
                  för att reducera risk samtidigt som vi bibehåller uppsidepotential.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Key Metrics */}
          <Card className="p-8 mb-16">
            <CardContent>
              <h2 className="text-3xl font-semibold text-center mb-8">Nyckeltal och villkor</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-warm-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-warm-accent" />
                  </div>
                  <div className="text-2xl font-bold text-warm-accent mb-2">8%</div>
                  <div className="text-sm text-muted-foreground">Årlig utdelning</div>
                  <div className="text-xs text-muted-foreground mt-1">(6% kassaflödesbaserad)</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-warm-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-warm-accent" />
                  </div>
                  <div className="text-2xl font-bold text-warm-accent mb-2">100 000</div>
                  <div className="text-sm text-muted-foreground">Preferensaktier</div>
                  <div className="text-xs text-muted-foreground mt-1">à 100 SEK</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-warm-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-warm-accent" />
                  </div>
                  <div className="text-2xl font-bold text-warm-accent mb-2">5 år</div>
                  <div className="text-sm text-muted-foreground">Inlösentid</div>
                  <div className="text-xs text-muted-foreground mt-1">eller vid IPO</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-warm-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-warm-accent" />
                  </div>
                  <div className="text-2xl font-bold text-warm-accent mb-2">2026</div>
                  <div className="text-sm text-muted-foreground">Planerad notering</div>
                  <div className="text-xs text-muted-foreground mt-1">NGM Nordic AIF</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Risk Factors */}
          <Card className="p-8 mb-16">
            <CardContent>
              <h2 className="text-3xl font-semibold mb-6">Riskfaktorer</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-warm-accent rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Motpartsrisk i direktlåneportföljen</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-warm-accent rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Värderingsosäkerhet i onoterade innehav</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-warm-accent rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Regulatorisk risk kopplad till AIF-strukturen</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-warm-accent rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Marknadsrisker som påverkar kassaflöden</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-warm-accent rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Likviditetsrisk före notering</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-warm-accent rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Skatterisker kopplade till strukturen</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <Button variant="dramatic" size="lg">
              Ladda ner investeringsmemorandum
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};