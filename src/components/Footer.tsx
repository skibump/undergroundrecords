import { Film, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-hero border-t border-border/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Film className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                Underground Pictures
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transforming lives into cinematic masterpieces through cutting-edge AI technology 
              and personalized storytelling. Your story deserves to be told.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hello@undergroundpictures.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-FILM</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Life Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">AI Avatar Creation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Motion Capture</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cinematic Production</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Legacy Planning</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Our Technology</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>&copy; 2024 Underground Pictures. All rights reserved.</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <MapPin className="w-4 h-4" />
            <span>Los Angeles, CA • New York, NY • London, UK</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;