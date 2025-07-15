import { ExternalLink, Figma, Monitor, Smartphone, Image as ImageIcon, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const portfolioData = {
  logos: [
    { name: "CR Logo", tool: "Illustrator", description: "Vibrant and modern tech-style logo with abstract geometric elements and playful colors.", color: "energy-orange", image: "/me/Images/CR.png" },
    { name: "Marine X", tool: "Illustrator", description: "Sleek and bold wordmark logo with a strong, futuristic 'X' symbol in gradient blue.", color: "energy-blue", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop" },
    { name: "Rurabox", tool: "Illustrator", description: "Bright and friendly orange logo featuring a basket icon and clean, modern typography.", color: "energy-orange", image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop" },
    { name: "Shinetex", tool: "Illustrator", description: "Elegant monogram logo with a crown accent, combining shield and ribbon elements for a premium brand feel.", color: "primary", image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=400&h=300&fit=crop" }
  ],
  posters: [
    { name: "CR", tool: "Photoshop / Illustrator", description: "Creative poster designs for various occasions including Easter, Environment day, Hiring, Holi, NewYear, and Onam celebrations.", color: "energy-orange", image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop" },
    { name: "Moulana", tool: "Photoshop / Illustrator", description: "Awareness poster designs for Heart day, Earth day, liver day, environmental day, and Alzheimer's day campaigns.", color: "energy-pink", image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop" },
    { name: "College", tool: "Photoshop / Illustrator", description: "Educational poster designs for Expo events and magazine cover layouts with modern typography and layouts.", color: "energy-blue", image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop" }
  ],
  apps: [
    { name: "Findnow", tool: "Figma", description: "Location-based business discovery app with a user-friendly and intuitive interface.", color: "energy-green", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop" },
    { name: "Fakhra", tool: "Figma", description: "Elegant black-and-white e-commerce app designed for premium perfume shopping.", color: "accent", image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop" },
    { name: "Tasleem", tool: "Figma", description: "Bold red-and-white courier service app with a clean and functional layout.", color: "energy-pink", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop" },
    { name: "BeOrganic", tool: "Figma", description: "Green-themed grocery shopping app focused on organic and eco-friendly products.", color: "energy-green", image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=300&fit=crop" },
    { name: "Chargemeter", tool: "Figma", description: "EV charging station locator app with a modern blue, green, and purple color scheme.", color: "energy-blue", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop" },
    { name: "Sayartak", tool: "Figma", description: "Vehicle service booking app with a clean blue-and-white interface and service locator tools.", color: "energy-blue", image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop" }
  ],
  websites: [
    { name: "CodeRythm", tool: "Figma", description: "Modern rebranding website for an IT solutions company with sleek animations and smooth transitions.", color: "primary", image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop" },
    { name: "Aqtabot", tool: "Figma", description: "Location-based business directory website designed for seamless local discovery.", color: "energy-green", image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop" },
    { name: "Edison AI", tool: "Figma", description: "Conversational AI platform website with a futuristic UI", color: "energy-blue", image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop" },
    { name: "Mobicart", tool: "Figma", description: "E-commerce website for mobile devices and parts with a clean, tech-oriented layout.", color: "energy-orange", image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop" },
    { name: "Propartners", tool: "Figma", description: "Travel and destination booking website with vibrant visuals and user-friendly flow.", color: "accent", image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=400&h=300&fit=crop" },
    { name: "Damas", tool: "Figma", description: "Elegant furniture brand website showcasing products with a premium look and feel.", color: "secondary", image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop" }
  ]
};

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'logos': return <Palette className="w-5 h-5" />;
    case 'apps': return <Smartphone className="w-5 h-5" />;
    case 'websites': return <Monitor className="w-5 h-5" />;
    case 'posters': return <ImageIcon className="w-5 h-5" />;
    default: return <ImageIcon className="w-5 h-5" />;
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'logos': return 'energy-orange';
    case 'apps': return 'energy-blue';
    case 'websites': return 'energy-green';
    case 'posters': return 'energy-pink';
    default: return 'primary';
  }
};

const PortfolioGrid = () => {
  return (
    <section id="portfolio" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-cosmic">
            Creative Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of logos, mobile apps, websites, and artistic creations. 
            Each project tells a unique story through design.
          </p>
        </div>

        {Object.entries(portfolioData).map(([category, items]) => (
          <div key={category} className="mb-20">
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-12">
              <div className={`p-3 rounded-curve bg-${getCategoryColor(category)}/20`}>
                {getCategoryIcon(category)}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold capitalize text-gradient-energy">
                {category}
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item, index) => (
                <Dialog key={item.name}>
                  <DialogTrigger asChild>
                    <Card 
                      className="group hover-lift transition-smooth border-2 border-border/50 hover:border-primary/50 bg-surface overflow-hidden cursor-pointer animate-floating"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Project Image */}
                      <div className="relative overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-smooth"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                        
                        {/* Color indicator */}
                        <div className="absolute top-3 right-3">
                          <div 
                            className={`w-3 h-3 rounded-full bg-${item.color} animate-pulse-glow`}
                          />
                        </div>
                      </div>

                      <CardContent className="p-6">
                        {/* Project Info */}
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <h4 className="text-xl font-bold">{item.name}</h4>
                            <Badge variant="outline" className="text-xs">
                              {item.tool}
                            </Badge>
                          </div>
                          
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {item.description}
                          </p>
                          
                          {/* Hover Action - Only show for non-logos and non-posters */}
                          {category !== 'logos' && category !== 'posters' && (
                            <div className="opacity-0 group-hover:opacity-100 transition-smooth pt-2">
                              <div className="flex items-center gap-2 text-primary text-sm font-medium">
                                <span>View Details</span>
                                <ExternalLink className="w-4 h-4" />
                              </div>
                            </div>
                          )}
                          
                          {/* Click to view for logos and posters */}
                          {(category === 'logos' || category === 'posters') && (
                            <div className="opacity-0 group-hover:opacity-100 transition-smooth pt-2">
                              <div className="flex items-center gap-2 text-primary text-sm font-medium">
                                <span>Click to view details</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-gradient-cosmic">
                        {item.name}
                      </DialogTitle>
                      <DialogDescription className="text-lg">
                        {category.slice(0, -1).charAt(0).toUpperCase() + category.slice(1, -1)} project created with {item.tool}
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="space-y-6">
                      {/* Project Image */}
                      <div className="relative overflow-hidden rounded-lg">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-64 object-contain"
                        />
                        <div className="absolute top-4 right-4">
                          <div 
                            className={`w-4 h-4 rounded-full bg-${item.color} animate-pulse-glow`}
                          />
                        </div>
                      </div>
                      
                      {/* Project Details */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <Badge variant="secondary" className="px-3 py-1">
                            {getCategoryIcon(category)}
                            <span className="ml-2 capitalize">{category.slice(0, -1)}</span>
                          </Badge>
                          <Badge variant="outline" className="px-3 py-1">
                            {item.tool}
                          </Badge>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold mb-2">Project Description</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                        
                        {/* Additional details based on category */}
                        <div>
                          <h4 className="text-lg font-semibold mb-2">Project Details</h4>
                          <div className="space-y-2 text-sm">
                            {category === 'logos' && (
                              <>
                                <p><span className="font-medium">Type:</span> Brand Identity & Logo Design</p>
                                <p><span className="font-medium">Deliverables:</span> Logo variations, brand guidelines, vector files</p>
                                <p><span className="font-medium">Industry:</span> Technology & Business</p>
                              </>
                            )}
                            {category === 'posters' && (
                              <>
                                <p><span className="font-medium">Type:</span> Poster Design & Visual Communication</p>
                                <p><span className="font-medium">Deliverables:</span> Print-ready designs, digital formats, brand consistency</p>
                                <p><span className="font-medium">Applications:</span> Events, Awareness campaigns, Educational materials</p>
                              </>
                            )}
                            {category === 'apps' && (
                              <>
                                <p><span className="font-medium">Platform:</span> Mobile Application (iOS & Android)</p>
                                <p><span className="font-medium">Deliverables:</span> UI/UX Design, Prototypes, Design System</p>
                                <p><span className="font-medium">Features:</span> User-centered design, Responsive interface</p>
                              </>
                            )}
                            {category === 'websites' && (
                              <>
                                <p><span className="font-medium">Platform:</span> Web Application</p>
                                <p><span className="font-medium">Deliverables:</span> Web Design, Responsive Layout, Interactive Prototypes</p>
                                <p><span className="font-medium">Features:</span> Modern UI, Smooth animations, Mobile-first design</p>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Curved transitions */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-muted/20 curve-wave" />
    </section>
  );
};

export default PortfolioGrid;