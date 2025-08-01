import { Button } from "@/components/ui/button";
import { Play, Sparkles, Brain, Headset } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Dynamic Background with Particles */}
      <div className="absolute inset-0 bg-gradient-hero">
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        
        {/* Matrix-style Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-r border-primary/20 h-full"></div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-3 bg-primary/5 border border-primary/30 px-6 py-3 mb-12 backdrop-blur-sm">
            <Brain className="w-5 h-5 text-primary animate-pulse-glow" />
            <span className="text-sm text-primary font-semibold tracking-wider uppercase">
              AI Revolution in Storytelling
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tight">
            YOUR LIFE
            <span className="bg-gradient-accent bg-clip-text text-transparent block">
              IMMORTALIZED
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Create cinematic masterpieces of your life with hyper-realistic AI avatars and motion capture. 
            Experience your memories in VR or share your legacy through film.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button variant="hero" size="lg" className="text-lg px-10 py-5 font-bold">
              CREATE FILM
            </Button>
            <Button variant="tech" size="lg" className="text-lg px-10 py-5">
              <Headset className="w-6 h-6 mr-3" />
              VR MEMORIES
            </Button>
            <Button variant="neon" size="lg" className="text-lg px-10 py-5">
              <Play className="w-6 h-6 mr-3" />
              DEMO
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-3xl font-bold text-primary mb-2">AI AVATARS</div>
              <div className="text-sm text-muted-foreground">100% Realistic Movement</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-accent mb-2">VR EXPERIENCE</div>
              <div className="text-sm text-muted-foreground">Relive Your Memories</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-primary mb-2">LEGACY FILMS</div>
              <div className="text-sm text-muted-foreground">Professional Storytelling</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-20 w-6 h-6 bg-gradient-particle rounded-full animate-drift opacity-80"></div>
      <div className="absolute top-1/3 right-20 w-8 h-8 bg-gradient-particle rounded-full animate-float opacity-60 delay-1000"></div>
      <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-gradient-particle rounded-full animate-pulse-glow opacity-70 delay-500"></div>
      <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-gradient-particle rounded-full animate-drift opacity-50 delay-2000"></div>
    </section>
  );
};

export default HeroSection;