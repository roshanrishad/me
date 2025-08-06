import { Sparkles, Heart, Code2, Palette, Coffee, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import roshanPortrait from "/me/Images/me2.jpg";

const skills = [
  { name: "UI/UX Design", icon: Palette, level: 95, color: "energy-pink" },
  { name: "Figma", icon: Code2, level: 98, color: "energy-blue" },
  { name: "Illustrator", icon: Sparkles, level: 85, color: "energy-orange" },
  { name: "Photoshop", icon: Star, level: 90, color: "accent" },
  { name: "Creative Vision", icon: Heart, level: 100, color: "primary" },
  { name: "Problem Solving", icon: Coffee, level: 92, color: "energy-green" }
];

const AboutSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-flow opacity-50" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-energy-pink/10 rounded-full blur-3xl morphing-blob" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-energy-blue/10 rounded-full blur-3xl morphing-blob" style={{ animationDelay: '4s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Portrait Side */}
          <div className="relative">
            <div className="relative max-w-lg mx-auto lg:mx-0">
              {/* Main portrait */}
              <div className="relative">
                <img 
                  src={roshanPortrait} 
                  alt="Roshan Rishad" 
                  className="w-full h-96 object-cover rounded-5xl shadow-cosmic hover-glow transition-smooth"
                />
                
                {/* Floating elements around portrait */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-energy-orange rounded-full float opacity-80" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-energy-blue rounded-full float-delayed opacity-70" />
                <div className="absolute top-1/2 -right-8 w-8 h-8 bg-energy-pink rounded-full float opacity-90" />
              </div>
              
              {/* Decorative curves */}
              <div className="absolute -z-10 top-8 left-8 w-full h-full bg-primary/20 rounded-5xl" />
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-cosmic">
                About Me
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm <span className="text-primary font-semibold">Roshan Rishad Karuthodath</span>, a passionate UI/UX designer and artist 
                  who believes in creating digital experiences that surprise and delight users. 
                  My journey combines technical precision with artistic intuition.
                </p>
                <p>
                  With expertise spanning from <span className="text-energy-orange font-medium">logo design</span> to 
                  <span className="text-energy-blue font-medium"> mobile applications</span> and 
                  <span className="text-energy-green font-medium"> web experiences</span>, 
                  I craft solutions that are both beautiful and functional.
                </p>
                <p>
                  I love <span className="text-accent font-medium">curves, creativity, and surprises</span> – 
                  elements that bring life to digital interfaces and create memorable user experiences.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gradient-energy">Skills & Expertise</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <Card key={skill.name} className="group hover-lift transition-smooth bg-surface border-border/50">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 rounded-lg bg-${skill.color}/20`}>
                          <skill.icon className={`w-4 h-4 text-${skill.color}`} />
                        </div>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      
                      {/* Skill Level Bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Proficiency</span>
                          <span className="text-primary font-medium">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted/30 rounded-full h-2">
                          <div 
                            className={`bg-${skill.color} h-2 rounded-full transition-all duration-1000 group-hover:animate-pulse-glow`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Fun Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-energy-orange">35+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-energy-green">6+</div>
                <div className="text-sm text-muted-foreground">Tools Mastered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-energy-pink">100%</div>
                <div className="text-sm text-muted-foreground">Passion</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;