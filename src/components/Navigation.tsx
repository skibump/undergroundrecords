import { Button } from "@/components/ui/button";
import { Film } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Film className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">
              Underground Pictures
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#process" className="text-foreground hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>
          
          <Button variant="hero" size="lg" asChild>
            <Link to="/create-film">Start Your Story</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;