import { Button } from "@/components/ui/button";
import { Play, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-underground-pictures.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">
              AI-Powered Life Cinema
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your Life,
            <span className="bg-gradient-accent bg-clip-text text-transparent block">
              Your Movie
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your life story into a cinematic masterpiece with AI-powered avatars, 
            motion capture technology, and personalized storytelling. Create an immortal 
            legacy where you're the star.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Create Your Film
            </Button>
            <Button variant="cinematic" size="lg" className="text-lg px-8 py-4">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>
          
          <div className="mt-12 text-sm text-muted-foreground">
            ✨ From interviews to AI avatars • 🎬 Professional storytelling • 🎭 100% authentic movement
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-primary rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-1/3 right-16 w-6 h-6 bg-accent rounded-full animate-pulse opacity-40 delay-300"></div>
      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-primary rounded-full animate-pulse opacity-50 delay-700"></div>
    </section>
  );
};

export default HeroSection;