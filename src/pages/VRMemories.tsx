import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Headset, Brain, Zap, Eye, Heart, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const VRMemories = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mb-8">
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </Link>
              
              <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-reality bg-clip-text text-transparent animate-reality-pulse">
                VR MEMORY EXPERIENCES
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Step into your memories like never before. Our VR technology recreates your most precious moments with stunning realism
              </p>
            </div>

            {/* Hero Visual */}
            <div className="relative mb-16 h-64 bg-gradient-dream rounded-lg overflow-hidden shadow-reality animate-hologram-flicker">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Headset className="w-24 h-24 text-primary mx-auto mb-4 animate-float" />
                  <p className="text-2xl font-bold text-foreground">IMMERSE YOURSELF IN REALITY</p>
                </div>
              </div>
              
              {/* Floating VR elements */}
              <div className="absolute top-4 left-4 w-8 h-8 bg-gradient-tech rounded-full animate-drift opacity-60"></div>
              <div className="absolute top-12 right-8 w-6 h-6 bg-gradient-neon rounded-full animate-float opacity-70 delay-1000"></div>
              <div className="absolute bottom-8 left-16 w-10 h-10 bg-gradient-hologram rounded-full animate-pulse-glow opacity-50 delay-500"></div>
            </div>

            {/* VR Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card className="p-8 bg-gradient-card border border-primary/20 shadow-hologram animate-hologram-flicker">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-tech rounded-full flex items-center justify-center shadow-glow">
                    <Eye className="w-8 h-8 text-background" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">360° IMMERSION</h3>
                  <p className="text-muted-foreground">
                    Experience memories from every angle with full 360-degree immersive environments
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-card border border-accent/20 shadow-reality animate-reality-pulse delay-300">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-neon rounded-full flex items-center justify-center shadow-neon-glow">
                    <Brain className="w-8 h-8 text-background" />
                  </div>
                  <h3 className="text-2xl font-bold text-accent mb-4">AI RECONSTRUCTION</h3>
                  <p className="text-muted-foreground">
                    Advanced AI fills in gaps to create seamless, realistic recreations of your memories
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-card border border-primary/20 shadow-hologram animate-hologram-flicker delay-500">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-tech rounded-full flex items-center justify-center shadow-glow">
                    <Heart className="w-8 h-8 text-background" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">EMOTIONAL SYNC</h3>
                  <p className="text-muted-foreground">
                    Biometric feedback ensures authentic emotional responses during your VR journey
                  </p>
                </div>
              </Card>
            </div>

            {/* VR Packages */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black mb-6 text-foreground">VR Experience Packages</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Memory Recreation */}
              <Card className="p-8 bg-gradient-card border border-primary/20 shadow-glow animate-dream-shift">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-tech rounded-full flex items-center justify-center shadow-glow">
                    <Headset className="w-10 h-10 text-background" />
                  </div>
                  <h3 className="text-3xl font-bold text-primary mb-4">MEMORY RECREATION</h3>
                  <div className="text-4xl font-black text-foreground mb-6">$4,999</div>
                  
                  <ul className="space-y-4 text-left mb-8">
                    <li className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-primary" />
                      <span>Recreate up to 5 specific memories</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Eye className="w-5 h-5 text-primary" />
                      <span>High-definition VR environments</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Brain className="w-5 h-5 text-primary" />
                      <span>AI-enhanced details and ambiance</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Heart className="w-5 h-5 text-primary" />
                      <span>Emotional mapping integration</span>
                    </li>
                  </ul>
                  
                  <Button variant="hero" className="w-full">
                    Recreate Memories
                  </Button>
                </div>
              </Card>

              {/* Life Journey */}
              <Card className="p-8 bg-gradient-card border border-accent/20 shadow-reality animate-reality-pulse">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-neon rounded-full flex items-center justify-center shadow-neon-glow">
                    <Globe className="w-10 h-10 text-background" />
                  </div>
                  <h3 className="text-3xl font-bold text-accent mb-4">LIFE JOURNEY</h3>
                  <div className="text-4xl font-black text-foreground mb-6">$12,999</div>
                  
                  <ul className="space-y-4 text-left mb-8">
                    <li className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-accent" />
                      <span>Complete life timeline in VR</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Eye className="w-5 h-5 text-accent" />
                      <span>Ultra-realistic environments</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Brain className="w-5 h-5 text-accent" />
                      <span>Advanced AI storytelling</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Heart className="w-5 h-5 text-accent" />
                      <span>Interactive family experiences</span>
                    </li>
                  </ul>
                  
                  <Button variant="neon" className="w-full">
                    Start Life Journey
                  </Button>
                </div>
              </Card>
            </div>

            {/* Technology Showcase */}
            <Card className="p-12 bg-gradient-dream border border-primary/20 shadow-hologram mb-16 animate-hologram-flicker">
              <div className="text-center">
                <h2 className="text-4xl font-black mb-6 bg-gradient-reality bg-clip-text text-transparent">
                  THE TECHNOLOGY BEHIND THE MAGIC
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  <div>
                    <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-primary mb-2">Neural Networks</h4>
                    <p className="text-muted-foreground">Advanced AI processes memories and reconstructs environments</p>
                  </div>
                  <div>
                    <Eye className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-accent mb-2">Photogrammetry</h4>
                    <p className="text-muted-foreground">3D scanning technology creates realistic virtual spaces</p>
                  </div>
                  <div>
                    <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-primary mb-2">Haptic Feedback</h4>
                    <p className="text-muted-foreground">Feel the emotions and sensations of your memories</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* CTA */}
            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-8">
                Ready to step into your memories?
              </p>
              <Button variant="hero" size="lg" className="text-lg px-12 py-6 animate-reality-pulse">
                Book VR Experience
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VRMemories;