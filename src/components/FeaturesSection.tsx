import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Camera, Headset, Video, Zap, Trophy } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "HYPER-REALISTIC AI AVATARS",
      description: "Advanced neural networks create photorealistic avatars that perfectly replicate your appearance, voice patterns, and unique mannerisms with scientific precision."
    },
    {
      icon: Camera,
      title: "QUANTUM MOTION CAPTURE", 
      description: "Military-grade motion capture technology records every micro-movement, creating 100% authentic digital representations of your physical presence."
    },
    {
      icon: Headset,
      title: "VR MEMORY RECREATION",
      description: "Step back into your most precious moments with immersive VR technology. Relive your wedding, childhood home, or any memory in stunning detail."
    },
    {
      icon: Video,
      title: "AI SCRIPTWRITING ENGINE",
      description: "Our proprietary AI analyzes your life data and creates compelling, personalized narratives that capture the true essence of your story."
    },
    {
      icon: Zap,
      title: "NEURAL INTERVIEW PROCESSING",
      description: "Advanced AI conducts deep interviews with family and friends, extracting emotional context and hidden memories to enrich your story."
    },
    {
      icon: Trophy,
      title: "CINEMA-GRADE PRODUCTION",
      description: "Every project meets Hollywood standards with 8K resolution, spatial audio, and professional color grading for an unforgettable experience."
    }
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background Tech Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(180 100% 60%) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block bg-primary/10 border border-primary/30 px-6 py-2 mb-8 text-sm font-bold tracking-widest text-primary uppercase">
            NEXT-GEN TECHNOLOGY
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
            BEYOND
            <span className="bg-gradient-accent bg-clip-text text-transparent block">
              REALITY
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-light">
            Breakthrough AI, quantum motion capture, and immersive VR technology create experiences 
            indistinguishable from reality
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-card border border-primary/20 hover:border-primary/60 transition-all duration-500 hover:shadow-neon-glow group hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-20 h-20 bg-gradient-tech flex items-center justify-center mb-6 shadow-tech group-hover:shadow-neon-glow transition-all duration-500 group-hover:scale-110">
                  <feature.icon className="w-10 h-10 text-background" />
                </div>
                <CardTitle className="text-xl font-black text-foreground tracking-tight uppercase">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed font-light">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;