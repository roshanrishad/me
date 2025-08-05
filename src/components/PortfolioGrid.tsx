import { ExternalLink, Monitor, Smartphone, Image as ImageIcon, Palette, Package, X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState, useEffect } from "react";

const portfolioData = {
  apps: [
    { name: "Findnow", tool: "Figma", description: "Location-based business discovery app with a user-friendly and intuitive interface.", color: "energy-green", images: ["/me/Images/fi1.png", "/me/Images/fi2.png"] },
    { name: "Fakhra", tool: "Figma", description: "Elegant black-and-white e-commerce app designed for premium perfume shopping.", color: "accent", images: ["/me/Images/f1.png", "/me/Images/f2.png"] },
    { name: "Tasleem", tool: "Figma", description: "Bold red-and-white courier service app with a clean and functional layout.", color: "energy-pink", images: ["/me/Images/ta1.png", "/me/Images/ta2.png"] },
    { name: "BeOrganic", tool: "Figma", description: "Green-themed grocery shopping app focused on organic and eco-friendly products.", color: "energy-green", images: ["/me/Images/b1.png", "/me/Images/b2.png"] },
    { name: "Chargemeter", tool: "Figma", description: "EV charging station locator app with a modern blue, green, and purple color scheme.", color: "energy-blue", images: ["/me/Images/c1.png", "/me/Images/c2.png"] },
    { name: "Sayartak", tool: "Figma", description: "Vehicle service booking app with a clean blue-and-white interface and service locator tools.", color: "energy-blue", images: ["/me/Images/s1.png", "/me/Images/s2.png"] },
    { name: "MediaOne", tool: "Figma", description: "News app based in Kerala with a clean blue-and-white interface, delivering real-time updates and intuitive news browsing.", color: "energy-blue", images: ["/me/Images/m1.png", "/me/Images/m2.png"] },
    { name: "Loko", tool: "Figma", description: "Food truck booking app with a minimal blue-and-white interface, allowing users to pre-order meals and skip the wait at the truck.", color: "energy-blue", images: ["/me/Images/l1.png", "/me/Images/l2.png"] },
    { name: "Beauty Saloon", tool: "Figma", description: "A salon booking app with a vibrant pink and purple gradient interface, offering seamless appointment scheduling for various beauty services.", color: "energy-blue", images: ["/me/Images/bs1.png", "/me/Images/bs2.png"] }
  ],
  websites: [
    { name: "CodeRythm", tool: "Figma", description: "Modern rebranding website for an IT solutions company with sleek animations and smooth transitions.", color: "primary", images: ["https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop"] },
    { name: "Aqtabot", tool: "Figma", description: "Location-based business directory website designed for seamless local discovery.", color: "energy-green", images: ["https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop"] },
    { name: "Edison AI", tool: "Figma", description: "Conversational AI platform website with a futuristic UI", color: "energy-blue", images: ["https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop"] },
    { name: "Mobicart", tool: "Figma", description: "E-commerce website for mobile devices and parts with a clean, tech-oriented layout.", color: "energy-orange", images: ["https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop"] },
    { name: "Propartners", tool: "Figma", description: "Travel and destination booking website with vibrant visuals and user-friendly flow.", color: "accent", images: ["https://images.unsplash.com/photo-1527576539890-dfa815648363?w=400&h=300&fit=crop"] },
    { name: "Damas", tool: "Figma", description: "Elegant furniture brand website showcasing products with a premium look and feel.", color: "secondary", images: ["https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop"] },
    { name: "Fakhra", tool: "Figma", description: "A sophisticated e-commerce website for perfumes, featuring a luxurious design and smooth shopping experience with elegant product displays.", color: "secondary", images: ["https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop"] },
    { name: "Moulana Hospital", tool: "Figma", description: "A modern healthcare website with a clean, user-friendly layout, offering easy access to departments, doctor bookings, and patient services.", color: "secondary", images: ["https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop"] }
  ],
  logos: [ 
    { name: "CR Logo", tool: "Illustrator", description: "Vibrant and modern tech-style logo with abstract geometric elements and playful colors.", color: "energy-orange", images: ["/me/Images/cr.jpg"] },
    { name: "Marine X", tool: "Illustrator", description: "Sleek and bold wordmark logo with a strong, futuristic 'X' symbol in gradient blue.", color: "energy-blue", images: ["/me/Images/marinex.png"] },
    { name: "Rurabox", tool: "Illustrator", description: "Bright and friendly orange logo featuring a basket icon and clean, modern typography.", color: "energy-orange", images: ["/me/Images/rurabox.png"] },
    { name: "Shinetex", tool: "Illustrator", description: "Elegant monogram logo with a crown accent, combining shield and ribbon elements for a premium brand feel.", color: "primary", images: ["/me/Images/shinetex.png"] }
  ],
  branding: [
    { name: "Rurabox", tool: "Illustrator", description: "Crafted a vibrant brand identity for a modern marketplace, including a bold logo, business cards, and cohesive visual language.", color: "energy-orange", images: ["/me/Images/r1.png", "/me/Images/r2.png", "/me/Images/r3.png", "/me/Images/r4.png"] },
    { name: "The Travel Address", tool: "Illustrator", description: "Designed a sophisticated and adventurous brand for a travel company—logo, stationery, and branding elements that inspire exploration.", color: "energy-blue", images: ["/me/Images/t1.png", "/me/Images/t2.png", "/me/Images/t3.png", "/me/Images/t4.png", "/me/Images/t5.png"] },
    { name: "Arkom", tool: "Illustrator", description: "Built a minimal and modern brand identity for a construction business, covering logo, business cards, and complete visual branding.", color: "energy-orange", images: ["/me/Images/a2.png", "/me/Images/a1.png"] },
    { name: "Nuvair", tool: "Illustrator", description: "Developed a fresh and clean brand system for a nasal strip company—featuring a sleek logo, print materials, and brand visuals.", color: "primary", images: ["/me/Images/n1.png", "/me/Images/n2.png", "/me/Images/n3.png"] }
  ],
  posters: [
    { name: "CodeRythm", tool: "Photoshop / Illustrator", description: "A series of social media posters designed for an IT company, covering special occasions, public holidays, and tech-themed celebrations.", color: "energy-orange", images: ["/me/Images/cr1.png", "/me/Images/cr2.png"] },
    { name: "Moulana Hospital", tool: "Photoshop / Illustrator", description: "Posters created for a hospital focusing on health awareness, social media engagement, and special occasion campaigns.", color: "energy-pink", images: ["/me/Images/moulana1.png", "/me/Images/moulana2.png"] },
    { name: "Creative Collection", tool: "Photoshop / Illustrator", description: "A diverse collection of freelance, college, and personal poster projects exploring various themes and styles beyond client work.", color: "energy-blue", images: ["/me/Images/o1.png", "/me/Images/o2.png", "/me/Images/o3.png", "/me/Images/o4.png", "/me/Images/o5.png"] }
  ]
};

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'logos': return <Palette className="w-5 h-5" />;
    case 'apps': return <Smartphone className="w-5 h-5" />;
    case 'websites': return <Monitor className="w-5 h-5" />;
    case 'posters': return <ImageIcon className="w-5 h-5" />;
    case 'products': return <Package className="w-5 h-5" />;
    default: return <ImageIcon className="w-5 h-5" />;
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'logos': return 'energy-orange';
    case 'apps': return 'energy-blue';
    case 'websites': return 'energy-green';
    case 'posters': return 'energy-pink';
    case 'products': return 'energy-pink';
    default: return 'primary';
  }
};

const PortfolioGrid = () => {
  const [zoomedItem, setZoomedItem] = useState<{ images: string[], startIndex: number } | null>(null);
  const [carouselApi, setCarouselApi] = useState(null);

  useEffect(() => {
    if (carouselApi && zoomedItem) {
      carouselApi.scrollTo(zoomedItem.startIndex);
    }
  }, [carouselApi, zoomedItem]);
  return (
    <>
    <section id="portfolio" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-cosmic" style={{lineHeight: "1.5"}}>
            My Design Shelf
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of mobile apps, websites, logos and artistic creations.
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
                          src={item.images[0]}
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

                  <DialogContent 
                    className="max-w-4xl max-h-[90vh] overflow-y-auto"
                  >
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-gradient-cosmic">
                        {item.name}
                      </DialogTitle>
                      <DialogDescription className="text-lg">
                        {category.slice(0, -1).charAt(0).toUpperCase() + category.slice(1, -1)} project created with {item.tool}
                      </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-6">
                      {/* Project Image Carousel */}
                      <Carousel className="w-full max-w-xl mx-auto">
                        <CarouselContent>
                          {item.images.map((image, index) => (
                            <CarouselItem key={index}>
                              <div className="p-1">
                                <Card>
                                  <CardContent className="flex aspect-video items-center justify-center p-0 rounded-sm overflow-hidden relative group">
                                    <img src={image} alt={`${item.name} screenshot ${index + 1}`} className="w-full h-full object-contain transition-transform hover:scale-105" />
                                    <div 
                                      className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center cursor-zoom-in" 
                                      onClick={() => setZoomedItem({ images: item.images, startIndex: index })}
                                    >
                                      <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-2 pointer-events-none">
                                        <ZoomIn className="w-5 h-5 text-black" />
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                      </Carousel>

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
                          {category !== 'products' && (
                            <h4 className="text-lg font-semibold mb-2">Project Details</h4>
                          )}
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

    {/* Zoom overlay with its own carousel */}
    {zoomedItem && (
      <div 
        className="fixed inset-0 z-40 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
        onClick={() => setZoomedItem(null)}
      >
        {/* Close button */}
        <button 
          className="absolute top-4 right-4 z-40 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
          onClick={() => setZoomedItem(null)}
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Centered Carousel for Zoomed View */}
        <div className="w-full max-w-4xl mx-auto relative">
          {/* <p className="text-white">{JSON.stringify(zoomedItem)}</p> */}
          {/* <p className="text-white">{JSON.stringify(carouselApi)}</p> */}
          <Carousel 
            className="w-full"
            opts={{ 
              loop: true
            }}
            setApi={setCarouselApi}
          >
            <CarouselContent className="-ml-0">
              {zoomedItem.images.map((image, index) => (
                <CarouselItem key={index} className="pl-0">
                  <div className="flex justify-center items-center min-h-[85vh] p-4">
                    <img 
                      src={image} 
                      alt={`Zoomed view ${index + 1}`} 
                      className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* {zoomedItem.images.length > 1 && (
              <>
                <button 
                  className="absolute z-50 left-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full p-2 transition-colors z-10"
                  onClick={() => carouselApi?.scrollPrev()}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  className="absolute z-50 right-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full p-2 transition-colors z-10"
                  onClick={() => carouselApi?.scrollNext()}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )} */}
          </Carousel>
        </div>

        {/* Instructions */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/70 text-sm">
          Click anywhere outside the image to close
        </div>
      </div>
    )}
    </>
  );
};

export default PortfolioGrid;
