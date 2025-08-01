import { Card, CardContent } from "@/components/ui/card";
import { Zap, Heart, Shield, Infinity, Camera, Mic } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "100% Realistic AI Avatars",
      description: "Motion capture technology ensures your digital self moves and behaves exactly like you do in real life.",
    },
    {
      icon: Heart,
      title: "Emotional Storytelling",
      description: "Our AI crafts compelling narratives that capture the heart and soul of your unique life journey.",
    },
    {
      icon: Shield,
      title: "Privacy Protected",
      description: "Your personal data and memories are securely encrypted and protected throughout the entire process.",
    },
    {
      icon: Infinity,
      title: "Eternal Legacy",
      description: "Create a lasting memorial that preserves your essence for future generations to experience.",
    },
    {
      icon: Camera,
      title: "Cinematic Quality",
      description: "Professional-grade production values ensure your life story looks like a Hollywood film.",
    },
    {
      icon: Mic,
      title: "Authentic Voice",
      description: "Advanced voice synthesis technology perfectly recreates your natural speaking patterns and tone.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionary
            <span className="bg-gradient-purple bg-clip-text text-transparent"> Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the future of personal storytelling with our groundbreaking technology 
            that brings your life to the big screen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-500 transform hover:-translate-y-1 bg-gradient-card border-border/50">
              <CardContent className="p-8 text-center">
                <div className="mb-6 relative">
                  <div className="w-16 h-16 bg-gradient-accent rounded-2xl mx-auto flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;