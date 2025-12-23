import { Sparkles, Clock, Droplets, Star, Award } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const highlights = [
  {
    icon: Sparkles,
    title: '5 Premium Fragrances',
    description: 'Curated collection of exclusive scents',
  },
  {
    icon: Award,
    title: 'Extrait de Parfum',
    description: 'The purest form of perfumery',
  },
  {
    icon: Droplets,
    title: '30% – 40% Oil',
    description: 'Ultra-high concentration',
  },
  {
    icon: Clock,
    title: '12+ Hours',
    description: 'Long-lasting performance',
  },
  {
    icon: Star,
    title: 'Luxury Crafted',
    description: 'Premium experience guaranteed',
  },
];

export const ProductHighlights = () => {
  return (
    <section className="py-20 md:py-32 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary uppercase tracking-[0.3em] text-sm font-body">The Collection</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 text-foreground">
              Crafted for <span className="text-primary">Excellence</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {highlights.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 100}>
              <div className="group relative bg-card border border-border hover:border-primary/50 rounded-xl p-6 text-center transition-all duration-500 hover:shadow-[0_0_40px_hsl(43_74%_49%/0.15)]">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <item.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-lg md:text-xl text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-body">{item.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
