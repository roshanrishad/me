import { ArrowDown, Sparkles, Palette, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";
import portfolioFloat from "@/assets/portfolio-float.jpg";
import LightRays from './LightRays';
import TrueFocus from './ui/TrueFocus';
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      

<div style={{ width: '100vw', height: '100%', position: 'absolute' }}>
  <LightRays
    raysOrigin="top-center"
    raysColor="#00ffff"
    raysSpeed={1.5}
    lightSpread={0.8}
    rayLength={1.2}
    followMouse={true}
    mouseInfluence={0.1}
    noiseAmount={0.1}
    distortion={0.05}
    className="custom-rays"
  />
</div>
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-black opacity-80" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-energy-orange rounded-full float opacity-20 blur-xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-energy-pink rounded-full float-delayed opacity-30 blur-2xl" />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-energy-blue rounded-full float opacity-25 blur-lg" />
      
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Name with gradient */}
          <h1 className="text-6xl md:text-5xl font-bold mb-6 text-white">
            Bonjour! Welcome to
          </h1>
          

<TrueFocus 
sentence="Roshan's Atelier"
manualMode={true}
blurAmount={5}
borderColor="purple"
animationDuration={1}
pauseBetweenAnimations={1}
/>
          {/* Subtitle with icons */}
          <div className="flex items-center justify-center gap-4 mb-8 mt-8">
            <div className="flex items-center gap-2 bg-muted/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Palette className="w-5 h-5 text-energy-pink" />
              <span className="text-lg">UI/UX Designer</span>
            </div>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
            <div className="flex items-center gap-2 bg-muted/20 backdrop-blur-sm rounded-full px-6 py-2">
              <Sparkles className="w-5 h-5 text-energy-orange" />
              <span className="text-lg">Artist</span>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences with curves, creativity, and delightful surprises. 
            Where design meets art in perfect harmony.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-glow glow-primary transition-smooth text-lg px-8 py-4 rounded-curve"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore My Work
              <ArrowDown className="ml-1 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-smooth text-lg px-8 py-4 rounded-curve"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Connect
            </Button>
          </div>
        </div>
        
        {/* Floating portfolio preview */}
        {/* <div className="absolute bottom-10 right-10 hidden lg:block">
          <div className="relative">
            <img 
              src={portfolioFloat} 
              alt="Portfolio Preview" 
              className="w-80 h-60 object-cover rounded-4xl shadow-cosmic hover-lift opacity-90"
            />
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-energy-green rounded-full animate-pulse-glow" />
          </div>
        </div> */}
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
      
      {/* Curved bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-surface curve-top" />
    </section>
  );
};

export default Hero;