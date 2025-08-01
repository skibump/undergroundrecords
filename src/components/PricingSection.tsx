import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Essential Story",
      price: "$2,999",
      description: "Perfect for preserving personal memories",
      features: [
        "30-minute life interview",
        "Basic motion capture session",
        "AI avatar creation",
        "15-minute personal film",
        "HD video quality",
        "Digital delivery",
        "1 revision included",
      ],
      popular: false,
    },
    {
      name: "Legacy Premium",
      price: "$7,999",
      description: "Comprehensive life documentation",
      features: [
        "Extended 2-hour interview",
        "Family & friends interviews",
        "Advanced motion capture",
        "Hyper-realistic AI avatar",
        "45-minute cinematic film",
        "4K video quality",
        "Custom soundtrack",
        "Physical media package",
        "3 revisions included",
        "Behind-the-scenes content",
      ],
      popular: true,
    },
    {
      name: "Immortal Experience",
      price: "$15,999",
      description: "The ultimate life celebration",
      features: [
        "Comprehensive life documentation",
        "Multiple shooting locations",
        "Professional actor interactions", 
        "Feature-length film (90+ min)",
        "8K video quality",
        "Interactive AI companion",
        "Virtual reality experience",
        "Museum-quality presentation",
        "Unlimited revisions",
        "Premiere event planning",
        "Lifetime access guarantee",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-card relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Investment in
            <span className="bg-gradient-accent bg-clip-text text-transparent"> Immortality</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect package to capture and preserve your life story for generations to come.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative group transition-all duration-500 ${
                plan.popular 
                  ? 'bg-gradient-purple border-primary shadow-purple-glow scale-105' 
                  : 'bg-gradient-card border-border/50 hover:shadow-glow'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-accent text-primary-foreground px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </CardTitle>
                <div className="text-4xl font-bold mb-2">
                  <span className={plan.popular ? "text-white" : "text-primary"}>
                    {plan.price}
                  </span>
                </div>
                <p className={`text-sm ${plan.popular ? "text-white/80" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className={`w-5 h-5 ${plan.popular ? "text-white" : "text-primary"} flex-shrink-0`} />
                      <span className={`text-sm ${plan.popular ? "text-white" : "text-foreground"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? "hero" : "cinematic"} 
                  className="w-full text-lg py-3"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            All packages include consultation, professional guidance, and lifetime customer support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;