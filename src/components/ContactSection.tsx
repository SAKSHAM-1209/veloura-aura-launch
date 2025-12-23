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
      
      <div className="container mx-auto max-w-3xl relative z-10">
        <ScrollReveal>
          <div className="text-center bg-card border border-border rounded-2xl p-8 md:p-12 shadow-elegant">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <Phone className="w-8 h-8 text-primary" />
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Pre-Order <span className="text-primary">Now</span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground font-body mb-8 max-w-lg mx-auto">
              Contact us to pre-order via WhatsApp or Instagram and secure your exclusive fragrance
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="gold"
                size="xl"
                asChild
                className="group"
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
              
              <Button
                variant="goldOutline"
                size="xl"
                asChild
                className="group"
              >
                <a
                  href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Follow on Instagram
                </a>
              </Button>
            </div>

            <p className="mt-8 text-muted-foreground font-body">
              Or call us directly: <span className="text-primary font-medium">+91 84594 42553</span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
