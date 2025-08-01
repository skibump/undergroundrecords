import { Card, CardContent } from "@/components/ui/card";
import { Users, Brain, Video, Sparkles } from "lucide-react";
import motionCaptureImage from "@/assets/motion-capture-feature.jpg";
import aiAvatarImage from "@/assets/ai-avatar-creation.jpg";

const ProcessSection = () => {
  const steps = [
    {
      icon: Users,
      title: "Life Data Collection",
      description: "We interview you, your family, and friends to gather rich stories, memories, and personal details that define who you are.",
      image: null,
    },
    {
      icon: Video,
      title: "Motion Capture Recording",
      description: "Using advanced motion capture technology, we record your natural movements, gestures, and expressions.",
      image: motionCaptureImage,
    },
    {
      icon: Brain,
      title: "AI Avatar Creation", 
      description: "Our AI creates a 100% realistic digital avatar that moves, talks, and behaves exactly like you.",
      image: aiAvatarImage,
    },
    {
      icon: Sparkles,
      title: "Cinematic Production",
      description: "AI writes and produces your personalized film scenario, creating a beautiful life story where you're the main character.",
      image: null,
    },
  ];

  return (
    <section id="process" className="py-24 bg-gradient-card relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How We Create Your
            <span className="bg-gradient-accent bg-clip-text text-transparent"> Life Movie</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our revolutionary 4-step process combines cutting-edge AI technology with personal storytelling 
            to create an unforgettable cinematic experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative group hover:shadow-dramatic transition-all duration-500 transform hover:-translate-y-2 bg-gradient-card border-border/50">
              <CardContent className="p-8">
                <div className="absolute -top-4 left-8 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {index + 1}
                </div>
                
                {step.image && (
                  <div className="mb-6 rounded-lg overflow-hidden">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                
                <step.icon className="w-12 h-12 text-primary mb-4 group-hover:text-accent transition-colors duration-300" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;