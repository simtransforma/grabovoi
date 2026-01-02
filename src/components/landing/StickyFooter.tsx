import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

const CHECKOUT_URL = "https://pay.hotmart.com/M102774668D?off=3cj9etar&checkoutMode=10";

const StickyFooter = () => {
  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-border shadow-[0_-4px_30px_rgba(0,0,0,0.3)] safe-area-bottom"
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
              href={CHECKOUT_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Quero garantir meu acesso por R$67"
            >
              QUERO GARANTIR MEU ACESSO POR R$67
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyFooter;
