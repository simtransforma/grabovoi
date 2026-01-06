import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { useCheckoutUrl } from "@/hooks/use-checkout-url";

const StickyFooter = () => {
  const { checkoutUrl } = useCheckoutUrl();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const heroButton = document.getElementById('hero-cta');
    if (!heroButton) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(!entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(heroButton);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-border shadow-[0_-4px_30px_rgba(0,0,0,0.3)] safe-area-bottom transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="container py-3 md:py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Microcopy */}
          <div className="flex items-center gap-3 text-sm">
            <div className="flex items-center gap-1.5 text-primary">
              <Clock className="h-4 w-4" />
              <span className="font-medium">Oferta por tempo limitado</span>
            </div>
            <span className="hidden sm:inline text-muted-foreground">•</span>
            <span className="hidden sm:inline text-muted-foreground">Acesso imediato</span>
          </div>
          
          {/* CTA Button */}
          <Button 
            asChild
            size="lg"
            className="w-full md:w-auto bg-gradient-gold hover:opacity-90 text-primary-foreground font-bold shadow-gold"
          >
<a 
              href={checkoutUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Quero garantir meu acesso por R$27,90"
            >
              <span className="hidden md:inline">QUERO GARANTIR MEU ACESSO POR R$27,90</span>
              <span className="md:hidden">GARANTIR ACESSO</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyFooter;
