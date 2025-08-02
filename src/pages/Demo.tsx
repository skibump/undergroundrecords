import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Play, Pause, Volume2, Maximize, Eye, Users, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navigation from "@/components/Navigation";

const Demo = () => {
  const [activeDemo, setActiveDemo] = useState<string>("film");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const demos = [
    {
      id: "film",
      title: "Life Film Demo",
      description: "Watch how we transform real memories into cinematic experiences",
      duration: "3:24",
      preview: "A glimpse into Sarah's wedding day recreation"
    },
    {
      id: "vr",
      title: "VR Memory Experience",
      description: "Step inside a recreated childhood home",
      duration: "2:45",
      preview: "360° tour of John's family kitchen from 1985"
    },
    {
      id: "avatar",
      title: "AI Avatar Showcase",
      description: "See the incredible realism of our AI avatars",
      duration: "1:52",
      preview: "Motion capture transformation in real-time"
    }
  ];

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
                EXPERIENCE THE MAGIC
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                See how we transform memories into reality with our cutting-edge AI and VR technology
              </p>
            </div>

            {/* Demo Selector */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {demos.map((demo) => (
                <Card 
                  key={demo.id}
                  className={`p-6 cursor-pointer transition-all duration-300 ${
                    activeDemo === demo.id 
                      ? 'bg-gradient-card border-primary shadow-glow' 
                      : 'bg-gradient-card border-border hover:border-primary/50'
                  }`}
                  onClick={() => setActiveDemo(demo.id)}
                >
                  <div className="text-center">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${
                      activeDemo === demo.id ? 'bg-gradient-tech shadow-glow' : 'bg-muted'
                    }`}>
                      {demo.id === 'film' && <Camera className="w-6 h-6" />}
                      {demo.id === 'vr' && <Eye className="w-6 h-6" />}
                      {demo.id === 'avatar' && <Users className="w-6 h-6" />}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{demo.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{demo.description}</p>
                    <div className="text-xs text-primary font-semibold">{demo.duration}</div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Main Demo Player */}
            <Card className="p-8 bg-gradient-card border border-primary/20 shadow-hologram mb-16 animate-hologram-flicker">
              {/* Video Player Mock */}
              <div className="relative bg-background rounded-lg overflow-hidden mb-6 shadow-dramatic">
                <div className="aspect-video bg-gradient-dream flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-6 bg-gradient-tech rounded-full flex items-center justify-center shadow-glow animate-pulse-glow">
                      <Play className="w-12 h-12 text-background" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {demos.find(d => d.id === activeDemo)?.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {demos.find(d => d.id === activeDemo)?.preview}
                    </p>
                    <Button 
                      variant="hero" 
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="animate-reality-pulse"
                    >
                      {isPlaying ? (
                        <>
                          <Pause className="w-5 h-5 mr-2" />
                          Pause Demo
                        </>
                      ) : (
                        <>
                          <Play className="w-5 h-5 mr-2" />
                          Play Demo
                        </>
                      )}
                    </Button>
                  </div>
                </div>
                
                {/* Player Controls */}
                <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Button variant="ghost" size="sm">
                        <Volume2 className="w-4 h-4" />
                      </Button>
                      <span className="text-sm text-muted-foreground">
                        0:00 / {demos.find(d => d.id === activeDemo)?.duration}
                      </span>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Maximize className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-muted rounded-full h-2 mt-3">
                    <div className="bg-gradient-tech h-2 rounded-full w-1/4 shadow-glow"></div>
                  </div>
                </div>
              </div>
              
              {/* Demo Info */}
              <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  {demos.find(d => d.id === activeDemo)?.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {demos.find(d => d.id === activeDemo)?.description}
                </p>
              </div>
            </Card>

            {/* Demo Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card className="p-6 bg-gradient-card border border-primary/20 shadow-glow animate-dream-shift">
                <div className="text-center">
                  <Camera className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-3">Real Footage</h3>
                  <p className="text-muted-foreground">
                    Actual customer experiences showing the transformation process
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card border border-accent/20 shadow-reality animate-reality-pulse delay-300">
                <div className="text-center">
                  <Eye className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-accent mb-3">Live Previews</h3>
                  <p className="text-muted-foreground">
                    See VR environments and AI avatars in action before committing
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card border border-primary/20 shadow-hologram animate-hologram-flicker delay-500">
                <div className="text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-3">Client Stories</h3>
                  <p className="text-muted-foreground">
                    Hear testimonials from families who've used our services
                  </p>
                </div>
              </Card>
            </div>

            {/* Interactive Demo Request */}
            <Card className="p-12 bg-gradient-dream border border-primary/20 shadow-reality mb-16 animate-reality-pulse">
              <div className="text-center">
                <h2 className="text-4xl font-black mb-6 bg-gradient-reality bg-clip-text text-transparent">
                  WANT A PERSONALIZED DEMO?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Experience our technology with your own photos and memories. 
                  Our team will create a custom preview just for you.
                </p>
                <Button variant="neon" size="lg" className="text-lg px-12 py-6 animate-hologram-flicker">
                  Request Personal Demo
                </Button>
              </div>
            </Card>

            {/* CTA */}
            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-8">
                Ready to create your own reality?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" className="text-lg px-12 py-6">
                  Start Your Project
                </Button>
                <Button variant="tech" size="lg" className="text-lg px-12 py-6">
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;