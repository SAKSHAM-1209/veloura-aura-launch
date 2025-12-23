import { HeroSection } from "@/components/HeroSection";
import { PreOrderOffer } from "@/components/PreOrderOffer";
import { ProductHighlights } from "@/components/ProductHighlights";
import { WhyVeloura } from "@/components/WhyVeloura";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <PreOrderOffer />
      <ProductHighlights />
      <WhyVeloura />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
