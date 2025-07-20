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
              Our <span className="font-bold">investment strategy</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              NordSpan combines secured direct loans with strategic growth investments 
              to create balanced returns with reduced risk.
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
                    <h3 className="text-2xl font-semibold">Secured Direct Loans</h3>
                    <div className="text-warm-accent font-semibold">50% of portfolio</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Target return:</span>
                    <span className="font-semibold text-warm-accent">12% annually</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Security:</span>
                    <span className="font-semibold">Secured loans</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Cash flow:</span>
                    <span className="font-semibold">Quarterly</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mt-6">
                  Direct loans provide stable cash flows that enable regular distributions to investors. 
                  Loans can in some cases be combined with options to convert to equity.
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
                    <h3 className="text-2xl font-semibold">Equity</h3>
                    <div className="text-warm-accent font-semibold">50% of portfolio</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Monitoring requirement:</span>
                    <span className="font-semibold">Minimum 12 months</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Focus:</span>
                    <span className="font-semibold">Private companies</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Risk management:</span>
                    <span className="font-semibold">Structured follow-up</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mt-6">
                  Investments in equity that we have followed and analyzed over an extended period 
                  to reduce risk while maintaining upside potential.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Key Metrics */}
          <Card className="p-8 mb-16">
            <CardContent>
              <h2 className="text-3xl font-semibold text-center mb-8">Key metrics and terms</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-warm-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-warm-accent" />
                  </div>
                  <div className="text-2xl font-bold text-warm-accent mb-2">8%</div>
                  <div className="text-sm text-muted-foreground">Annual distribution</div>
                  <div className="text-xs text-muted-foreground mt-1">(6% cash flow based)</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-warm-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-warm-accent" />
                  </div>
                  <div className="text-2xl font-bold text-warm-accent mb-2">100 000</div>
                  <div className="text-sm text-muted-foreground">Preference shares</div>
                  <div className="text-xs text-muted-foreground mt-1">at 100 SEK</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-warm-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-warm-accent" />
                  </div>
                  <div className="text-2xl font-bold text-warm-accent mb-2">5 years</div>
                  <div className="text-sm text-muted-foreground">Redemption period</div>
                  <div className="text-xs text-muted-foreground mt-1">or at IPO</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-warm-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-warm-accent" />
                  </div>
                  <div className="text-2xl font-bold text-warm-accent mb-2">2026</div>
                  <div className="text-sm text-muted-foreground">Planned listing</div>
                  <div className="text-xs text-muted-foreground mt-1">NGM Nordic AIF</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Risk Factors */}
          <Card className="p-8 mb-16">
            <CardContent>
              <h2 className="text-3xl font-semibold mb-6">Risk factors</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-warm-accent rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Counterparty risk in direct loan portfolio</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-warm-accent rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Valuation uncertainty in private holdings</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-warm-accent rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Regulatory risk related to AIF structure</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-warm-accent rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Market risks affecting cash flows</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-warm-accent rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Liquidity risk before listing</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-warm-accent rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Tax risks related to the structure</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <Button variant="dramatic" size="lg">
              Download investment memorandum
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};