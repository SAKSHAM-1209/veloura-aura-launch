import { Gift, Percent, Calendar } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { CountdownTimer } from './CountdownTimer';

export const PreOrderOffer = () => {
  // Target date: January 1st, 2026
  const targetDate = new Date('2026-01-01T00:00:00');

  return (
    <section className="py-20 md:py-32 px-4 relative overflow-hidden" id="pre-order">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl translate-y-1/2" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-primary uppercase tracking-[0.3em] text-sm font-body">Limited Time</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 text-foreground">
              Exclusive <span className="text-primary">Pre-Order</span> Offer
            </h2>
          </div>
        </ScrollReveal>

        {/* Countdown Timer */}
        <ScrollReveal delay={100}>
          <div className="mb-16">
            <p className="text-center text-muted-foreground font-body mb-6 uppercase tracking-widest text-sm">
              Pre-Orders Open In
            </p>
            <CountdownTimer targetDate={targetDate} />
          </div>
        </ScrollReveal>

        {/* Offer Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <ScrollReveal delay={200}>
            <div className="bg-card border border-border rounded-xl p-8 text-center hover:border-primary/50 transition-all duration-300 group hover:shadow-[0_0_40px_hsl(43_74%_49%/0.1)]">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">Pre-Order Window</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                <span className="text-primary font-medium">1st January</span> to <span className="text-primary font-medium">15th January 2026</span>
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="bg-card border border-primary/30 rounded-xl p-8 text-center relative overflow-hidden group hover:shadow-[0_0_40px_hsl(43_74%_49%/0.2)] transition-all duration-300">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs uppercase tracking-wider px-4 py-1 rounded-bl-lg font-body font-semibold">
                Best Value
              </div>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                <Percent className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">Massive Savings</h3>
              <p className="font-display text-5xl text-primary mb-2">50%</p>
              <p className="text-muted-foreground font-body">OFF on all pre-orders</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="bg-card border border-border rounded-xl p-8 text-center hover:border-primary/50 transition-all duration-300 group hover:shadow-[0_0_40px_hsl(43_74%_49%/0.1)]">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Gift className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">Free Gift</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                Get <span className="text-primary font-medium">1 FREE tester</span> of your choice with every pre-order
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
