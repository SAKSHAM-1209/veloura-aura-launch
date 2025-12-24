import { MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

const WHATSAPP_NUMBER = '918459442553';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Background layers */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(43_74%_49%/0.08)_0%,_transparent_70%)]" />

      {/* Subtle animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[100px] animate-pulse-slow" />
      <div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/3 blur-[80px] animate-pulse-slow"
        style={{ animationDelay: '1s' }}
      />

      {/* Decorative center lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-t from-transparent via-primary/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Pre-launch badge */}
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-primary font-body uppercase tracking-widest">
            Coming Soon
          </span>
        </div>

        {/* Brand name */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground mb-6 animate-fade-in-delay-1 leading-tight">
          <span className="block">Veloura</span>
          <span className="text-primary">Lifestyle</span>
        </h1>

        {/* Tagline */}
        <p className="font-elegant text-2xl sm:text-3xl md:text-4xl text-muted-foreground italic mb-4 animate-fade-in-delay-2">
          "A luxury you can feel"
        </p>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-muted-foreground font-body mb-10 animate-fade-in-delay-3">
          Launching your aura soon 🔜
        </p>

        {/* CTA Buttons */}
        <div
          className="
            flex flex-col gap-4
            md:flex-row
            md:justify-start
            md:pl-20
            animate-fade-in-delay-3
          "
        >
          {/* Pre-Order */}
          <Button
            variant="gold"
            size="xl"
            asChild
            className="animate-glow w-full md:w-auto"
          >
            <a href="#pre-order" className="text-center">
              Pre-Order Now
            </a>
          </Button>

          {/* WhatsApp */}
          <Button
            variant="goldOutline"
            size="xl"
            asChild
            className="group w-full md:w-auto"
          >
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I'm interested in pre-ordering from Veloura Lifestyle.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Contact on WhatsApp
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator (DESKTOP ONLY) */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};
