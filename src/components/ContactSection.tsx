import { Mail, Phone, MapPin, Send, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cosmic opacity-30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-energy-orange/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-energy-pink/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-cosmic" style={{lineHeight: "1.5"}}>
            Let's Create Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's discuss your next creative project 
            and make something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gradient-energy">
                Get in Touch
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                I'm always excited to work on new projects and collaborate with 
                amazing people. Drop me a message and let's start something creative!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <Card className="group hover-lift transition-smooth bg-surface border-border/50 hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-curve bg-energy-blue/20">
                      <Mail className="w-6 h-6 text-energy-blue" />
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-muted-foreground">roshanmanu49@gmail.com</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover-lift transition-smooth bg-surface border-border/50 hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-curve bg-energy-green/20">
                      <Phone className="w-6 h-6 text-energy-green" />
                    </div>
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className="text-muted-foreground">+1 (437) 661-2209</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover-lift transition-smooth bg-surface border-border/50 hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-curve bg-energy-pink/20">
                      <MapPin className="w-6 h-6 text-energy-pink" />
                    </div>
                    <div>
                      <div className="font-semibold">Location</div>
                      <div className="text-muted-foreground">Available Worldwide</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Creative elements */}
            <div className="flex items-center gap-4 pt-8">
              <Sparkles className="w-6 h-6 text-energy-orange animate-pulse" />
              <span className="text-lg font-medium">Always ready for creative challenges</span>
              <Heart className="w-5 h-5 text-energy-pink animate-pulse" />
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-surface border-border/50 shadow-cosmic">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input 
                      placeholder="Your name" 
                      className="bg-muted/20 border-border/50 focus:border-primary transition-smooth rounded-curve"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input 
                      type="email" 
                      placeholder="your@email.com" 
                      className="bg-muted/20 border-border/50 focus:border-primary transition-smooth rounded-curve"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input 
                    placeholder="What's this about?" 
                    className="bg-muted/20 border-border/50 focus:border-primary transition-smooth rounded-curve"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project or just say hello! I love hearing about creative ideas..."
                    className="bg-muted/20 border-border/50 focus:border-primary transition-smooth rounded-curve min-h-32"
                    rows={6}
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary-glow glow-primary transition-smooth text-lg rounded-curve"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Bottom decorative elements */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center gap-6">
            <div className="w-3 h-3 bg-energy-orange rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-energy-blue rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="w-4 h-4 bg-energy-pink rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="w-2 h-2 bg-energy-green rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;