import { Heart, Sparkles, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cosmic opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-20 bg-background curve-bottom" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-8">
          {/* Main Message */}
          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold text-gradient-cosmic">
              Thanks for Visiting!
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every curve tells a story, every design holds a surprise. 
              Let's create something beautiful together.
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center items-center gap-6">
            <div className="w-4 h-4 bg-energy-orange rounded-full animate-pulse" />
            <Sparkles className="w-6 h-6 text-energy-pink animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="w-3 h-3 bg-energy-blue rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            <Heart className="w-5 h-5 text-energy-green animate-pulse" style={{ animationDelay: '1.5s' }} />
            <div className="w-4 h-4 bg-primary rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border/30">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-muted-foreground">
                © 2024 Roshan Rishad. Crafted with{" "}
                <Heart className="inline w-4 h-4 text-energy-pink mx-1" />
                and creativity.
              </p>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="hover:bg-primary/20 transition-smooth rounded-curve"
              >
                Back to Top
                <ArrowUp className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute -top-10 left-10 w-20 h-20 bg-energy-orange/20 rounded-full blur-xl float" />
        <div className="absolute -bottom-10 right-10 w-24 h-24 bg-energy-blue/20 rounded-full blur-xl float-delayed" />
      </div>
    </footer>
  );
};

export default Footer;