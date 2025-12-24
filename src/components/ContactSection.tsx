import { Instagram, Phone, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { ScrollReveal } from './ScrollReveal';

const WHATSAPP_NUMBER = '918459442553';
const INSTAGRAM_HANDLE = 'velouralifestyle__';

export const ContactSection = () => {
  return (
    <section className="py-20 md:py-32 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-background" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/5 blur-3xl" />

      {/* Container */}
      <div className="relative z-10 mx-auto w-full max-w-3xl px-2 sm:px-4">
        <ScrollReveal>
          {/* Card */}
          <div className="w-full text-center bg-card border border-border rounded-2xl p-6 sm:p-8 md:p-12 shadow-elegant">
            
            {/* Icon */}
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <Phone className="w-8 h-8 text-primary" />
            </div>

            {/* Heading */}
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Pre-Order <span className="text-primary">Now</span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-body mb-8 max-w-lg mx-auto">
              Contact us to pre-order via WhatsApp or Instagram and secure your exclusive fragrance
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
              {/* WhatsApp Button (Primary) */}
              <Button
                variant="gold"
                size="xl"
                asChild
                className="group w-full sm:w-auto"
              >
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi! I'm interested in pre-ordering from Veloura Lifestyle.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  WhatsApp Us
                </a>
              </Button>

              {/* Instagram Button (Slightly Smaller) */}
              <Button
                variant="goldOutline"
                size="lg"
                asChild
                className="group w-full sm:w-auto px-6 py-3"
              >
                <a
                  href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tracking-wide"
                >
                  <Instagram className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Follow on Instagram
                </a>
              </Button>
            </div>

            {/* Phone */}
            <p className="mt-8 text-sm sm:text-base text-muted-foreground font-body break-words">
              Or call us directly:{' '}
              <span className="text-primary font-medium">
                +91 84594 42553
              </span>
            </p>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
