import { Check } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const reasons = [
  'Luxury you can feel',
  'High oil concentration',
  'Premium extrait quality',
  'Long-lasting performance',
  'Limited first batch launch',
];

export const WhyVeloura = () => {
  return (
    <section className="py-20 md:py-32 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-background" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-primary uppercase tracking-[0.3em] text-sm font-body">The Difference</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 text-foreground">
              Why <span className="text-primary">Veloura</span>?
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-4">
          {reasons.map((reason, index) => (
            <ScrollReveal key={reason} delay={index * 100}>
              <div className="flex items-center gap-4 p-5 bg-card/50 border border-border rounded-lg hover:border-primary/30 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Check className="w-5 h-5 text-primary" strokeWidth={2} />
                </div>
                <span className="font-elegant text-xl md:text-2xl text-foreground">{reason}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
