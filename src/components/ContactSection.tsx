import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your
            <span className="bg-gradient-accent bg-clip-text text-transparent"> Cinematic Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to create your immortal legacy? Contact us today to begin the most important film of your life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-gradient-card border-border/50 shadow-dramatic">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Tell Us Your Story
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    placeholder="First Name" 
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                  <Input 
                    placeholder="Last Name" 
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
                
                <Input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
                
                <Input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
                
                <Textarea 
                  placeholder="Tell us about yourself and what kind of story you'd like to create..." 
                  rows={5}
                  className="bg-background/50 border-border/50 focus:border-primary resize-none"
                />
                
                <Button variant="hero" className="w-full text-lg py-3">
                  Begin My Story
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                    <p className="text-muted-foreground">hello@undergroundpictures.com</p>
                    <p className="text-muted-foreground">production@undergroundpictures.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Call Us</h4>
                    <p className="text-muted-foreground">+1 (555) 123-FILM</p>
                    <p className="text-muted-foreground">+1 (555) 123-3456</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Visit Our Studio</h4>
                    <p className="text-muted-foreground">1234 Production Avenue</p>
                    <p className="text-muted-foreground">Los Angeles, CA 90210</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Business Hours</h4>
                    <p className="text-muted-foreground">Monday - Friday: 9 AM - 6 PM</p>
                    <p className="text-muted-foreground">Saturday: 10 AM - 4 PM</p>
                    <p className="text-muted-foreground">Sunday: By appointment</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;