import { Instagram, Phone } from 'lucide-react';

const INSTAGRAM_HANDLE = 'velouralifestyle__';
const PHONE_NUMBER = '+91 84594 42553';

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <h3 className="font-display text-2xl md:text-3xl text-primary mb-2">
            Veloura Lifestyle
          </h3>
          <p className="font-elegant text-lg text-muted-foreground italic mb-6">
            "Bringing luxury fragrances to life"
          </p>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mb-8">
            <a 
              href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-body">{PHONE_NUMBER}</span>
            </a>
            <a 
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span className="font-body">@{INSTAGRAM_HANDLE}</span>
            </a>
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-border mb-6" />

          {/* Copyright */}
          <p className="text-sm text-muted-foreground font-body">
            © 2026 Veloura Lifestyle. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
