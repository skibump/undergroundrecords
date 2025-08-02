import { Button } from "@/components/ui/button";
import { Play, Sparkles, Brain, Headset } from "lucide-react";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20 md:pt-0">
      {/* Dynamic Background with Particles */}
      <div className="absolute inset-0 bg-gradient-hero">
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {Array.from({
          length: 30
        }).map((_, i) => <div key={i} className="absolute w-1 h-1 bg-primary rounded-full animate-pulse" style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${2 + Math.random() * 3}s`
        }} />)}
        </div>
        
        {/* Matrix-style Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-6 md:grid-cols-12 h-full">
            {Array.from({
            length: 12
          }).map((_, i) => <div key={i} className="border-r border-primary/20 h-full"></div>)}
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-5xl mx-auto">
          
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-6 md:mb-8 leading-tight md:leading-none tracking-tight animate-dream-shift">
            TURN YOUR
            <span className="bg-gradient-reality bg-clip-text text-transparent block animate-reality-pulse">
              DREAMS INTO REALITY
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed font-light animate-hologram-flicker px-2">
            Transform your memories into hyper-realistic AI experiences. Step into your past with VR technology, 
            create cinematic films of your life, or build entirely new realities from your imagination.
          </p>
          
          <div className="flex flex-col gap-4 md:gap-6 mb-12 md:mb-16 px-2">
            <Button variant="hero" size="lg" className="w-full sm:w-auto text-base md:text-lg px-8 md:px-10 py-4 md:py-5 font-bold shadow-reality animate-reality-pulse" asChild>
              <Link to="/create-film">CREATE FILM</Link>
            </Button>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="tech" size="lg" className="w-full sm:w-auto text-base md:text-lg px-6 md:px-10 py-4 md:py-5 shadow-hologram animate-hologram-flicker" asChild>
                <Link to="/vr-memories">
                  <Headset className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
                  VR MEMORIES
                </Link>
              </Button>
              <Button variant="neon" size="lg" className="w-full sm:w-auto text-base md:text-lg px-6 md:px-10 py-4 md:py-5 shadow-glow animate-dream-shift" asChild>
                <Link to="/demo">
                  <Play className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
                  DEMO
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center px-2">
            <div className="group">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">AI AVATARS</div>
              <div className="text-sm text-muted-foreground">100% Realistic Movement</div>
            </div>
            <div className="group">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-2">VR EXPERIENCE</div>
              <div className="text-sm text-muted-foreground">Relive Your Memories</div>
            </div>
            <div className="group">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">LEGACY FILMS</div>
              <div className="text-sm text-muted-foreground">Professional Storytelling</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Floating Elements with Reality Effects - Hidden on mobile */}
      <div className="hidden md:block absolute top-20 left-20 w-6 h-6 bg-gradient-dream rounded-full animate-drift opacity-80 shadow-reality"></div>
      <div className="hidden md:block absolute top-1/3 right-20 w-8 h-8 bg-gradient-hologram rounded-full animate-float opacity-60 delay-1000 shadow-hologram"></div>
      <div className="hidden md:block absolute bottom-32 left-1/4 w-4 h-4 bg-gradient-reality rounded-full animate-pulse-glow opacity-70 delay-500"></div>
      <div className="hidden md:block absolute bottom-20 right-1/3 w-5 h-5 bg-gradient-particle rounded-full animate-drift opacity-50 delay-2000"></div>
      
      {/* Dream Reality Orbs - Hidden on mobile */}
      <div className="hidden lg:block absolute top-1/2 left-10 w-12 h-12 bg-gradient-dream rounded-full animate-reality-pulse opacity-40 blur-sm"></div>
      <div className="hidden lg:block absolute top-1/4 right-10 w-16 h-16 bg-gradient-hologram rounded-full animate-hologram-flicker opacity-30 blur-md"></div>
      <div className="hidden lg:block absolute bottom-1/3 left-1/2 w-10 h-10 bg-gradient-reality rounded-full animate-dream-shift opacity-50 blur-sm"></div>
    </section>;
};
export default HeroSection;