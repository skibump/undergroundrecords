import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Camera, Users, Brain, Film, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const CreateFilm = () => {
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
                CREATE YOUR LIFE FILM
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Transform your life story into a cinematic masterpiece with AI-powered storytelling and hyper-realistic avatars
              </p>
            </div>

            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="p-8 bg-gradient-card border border-primary/20 shadow-hologram animate-hologram-flicker">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-tech rounded-full flex items-center justify-center shadow-glow">
                    <Camera className="w-8 h-8 text-background" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Data Capture</h3>
                  <p className="text-muted-foreground">
                    Motion capture sessions, interviews, and life story collection to create your digital identity
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-card border border-accent/20 shadow-reality animate-reality-pulse delay-300">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-neon rounded-full flex items-center justify-center shadow-neon-glow">
                    <Brain className="w-8 h-8 text-background" />
                  </div>
                  <h3 className="text-2xl font-bold text-accent mb-4">AI Processing</h3>
                  <p className="text-muted-foreground">
                    Advanced AI analyzes your data to create realistic avatars and compelling narratives
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-card border border-primary/20 shadow-hologram animate-hologram-flicker delay-500">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-tech rounded-full flex items-center justify-center shadow-glow">
                    <Film className="w-8 h-8 text-background" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Film Production</h3>
                  <p className="text-muted-foreground">
                    Professional editing and production to create your personalized cinematic experience
                  </p>
                </div>
              </Card>
            </div>

            {/* Package Options */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black mb-6 text-foreground">Choose Your Package</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Basic Package */}
              <Card className="p-8 bg-gradient-card border border-primary/20 shadow-glow">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary mb-4">MEMORY REEL</h3>
                  <div className="text-4xl font-black text-foreground mb-6">$2,999</div>
                  <ul className="space-y-3 text-left mb-8">
                    <li className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <span>15-minute film</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-primary" />
                      <span>5 family interviews</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Camera className="w-5 h-5 text-primary" />
                      <span>Basic motion capture</span>
                    </li>
                  </ul>
                  <Button variant="hero" className="w-full">
                    Start Memory Reel
                  </Button>
                </div>
              </Card>

              {/* Premium Package */}
              <Card className="p-8 bg-gradient-card border border-accent/20 shadow-reality relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <div className="bg-gradient-neon px-3 py-1 text-sm font-bold text-background">
                    MOST POPULAR
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-accent mb-4">LIFE LEGACY</h3>
                  <div className="text-4xl font-black text-foreground mb-6">$7,999</div>
                  <ul className="space-y-3 text-left mb-8">
                    <li className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-accent" />
                      <span>45-minute documentary</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-accent" />
                      <span>15 family interviews</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Camera className="w-5 h-5 text-accent" />
                      <span>Advanced motion capture</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-accent" />
                      <span>Premium AI avatar</span>
                    </li>
                  </ul>
                  <Button variant="neon" className="w-full">
                    Create Life Legacy
                  </Button>
                </div>
              </Card>

              {/* Ultimate Package */}
              <Card className="p-8 bg-gradient-card border border-primary/20 shadow-hologram">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-primary mb-4">IMMORTAL</h3>
                  <div className="text-4xl font-black text-foreground mb-6">$15,999</div>
                  <ul className="space-y-3 text-left mb-8">
                    <li className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <span>Full-length feature film</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-primary" />
                      <span>Unlimited interviews</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Camera className="w-5 h-5 text-primary" />
                      <span>Hollywood-grade capture</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-primary" />
                      <span>Ultra-realistic AI avatar</span>
                    </li>
                  </ul>
                  <Button variant="tech" className="w-full">
                    Become Immortal
                  </Button>
                </div>
              </Card>
            </div>

            {/* CTA */}
            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-8">
                Ready to turn your life into a cinematic masterpiece?
              </p>
              <Button variant="hero" size="lg" className="text-lg px-12 py-6">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateFilm;