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
              Investment Philosophy
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg">
                Meridian Capital employs a fundamental, research-driven approach to investing, 
                focusing on companies with sustainable competitive advantages and strong management teams.
              </p>
              <p>
                Our investment strategy combines rigorous financial analysis with deep sector expertise 
                to identify opportunities that offer attractive risk-adjusted returns over the long term.
              </p>
              <p>
                With over $2.4 billion in assets under management, we maintain a concentrated portfolio 
                of our highest-conviction ideas while implementing sophisticated risk management techniques.
              </p>
            </div>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-financial-light rounded-full"></div>
                <span>Fundamental analysis and deep research</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-financial-light rounded-full"></div>
                <span>Long-term value creation focus</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-financial-light rounded-full"></div>
                <span>Disciplined risk management</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-financial-light rounded-full"></div>
                <span>ESG integration across all investments</span>
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div>
            <Card className="p-8">
              <CardContent className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
                  <p className="text-muted-foreground">
                    Speak with our investor relations team
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-financial-light/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-financial-light" />
                    </div>
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-muted-foreground">+1 (555) 123-4567</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-financial-light/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-financial-light" />
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-muted-foreground">investors@meridiancapital.com</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-financial-light/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-financial-light" />
                    </div>
                    <div>
                      <div className="font-medium">Office</div>
                      <div className="text-muted-foreground">
                        100 Wall Street, Suite 2500<br />
                        New York, NY 10005
                      </div>
                    </div>
                  </div>
                </div>

                <Button variant="dramatic" className="w-full mt-6">
                  Schedule a Meeting
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};