import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, TrendingUp, DollarSign, Clock, Shield, Target } from "lucide-react";

export const InvestmentProcessSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Our Investment Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we create value through our carefully structured investment approaches
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Direct Loans Section */}
          <Card className="p-8 border-2 hover:border-primary/20 transition-all duration-300 group">
            <CardHeader className="text-center pb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-3xl font-semibold mb-2">Direct Loans</CardTitle>
              <p className="text-warm-accent font-semibold text-lg">50% of portfolio</p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Rigorous Due Diligence</h4>
                    <p className="text-muted-foreground">Comprehensive analysis of borrower creditworthiness and business fundamentals</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Structured Terms</h4>
                    <p className="text-muted-foreground">Tailored loan structures with competitive rates and flexible repayment terms</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Active Monitoring</h4>
                    <p className="text-muted-foreground">Ongoing relationship management and performance tracking throughout the loan term</p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="font-semibold">Typical Timeline</span>
                </div>
                <p className="text-sm text-muted-foreground">4-8 weeks from application to funding</p>
              </div>

              <div className="bg-muted/30 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="font-semibold">Risk Management</span>
                </div>
                <p className="text-sm text-muted-foreground">Secured positions with comprehensive collateral analysis</p>
              </div>

              <Button className="w-full mt-6 group" size="lg">
                Learn About Direct Loans
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          {/* Equity Investments Section */}
          <Card className="p-8 border-2 hover:border-primary/20 transition-all duration-300 group">
            <CardHeader className="text-center pb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-3xl font-semibold mb-2">Equity Investments</CardTitle>
              <p className="text-warm-accent font-semibold text-lg">50% of portfolio</p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Strategic Sourcing</h4>
                    <p className="text-muted-foreground">Identifying high-potential companies with strong growth prospects and market positions</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Value Creation</h4>
                    <p className="text-muted-foreground">Active partnership providing strategic guidance, operational expertise, and network access</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Exit Strategy</h4>
                    <p className="text-muted-foreground">Planned value realization through strategic sales, IPOs, or management buyouts</p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Target className="w-4 h-4 text-primary" />
                  <span className="font-semibold">Investment Focus</span>
                </div>
                <p className="text-sm text-muted-foreground">Mid-market companies with €10M-€100M revenue</p>
              </div>

              <div className="bg-muted/30 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="font-semibold">Investment Horizon</span>
                </div>
                <p className="text-sm text-muted-foreground">3-7 years with active value creation</p>
              </div>

              <Button className="w-full mt-6 group" size="lg">
                Explore Equity Opportunities
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to discuss your investment needs?
          </p>
          <Button variant="outline" size="lg" className="px-8">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};