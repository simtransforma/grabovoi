import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const CHECKOUT_URL = "https://pay.hotmart.com/M102774668D?off=3cj9etar&checkoutMode=10";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="font-playfair text-lg font-semibold text-foreground">
            Grabovoi
          </span>
        </div>
        
        <Button 
          asChild
          size="sm"
          className="bg-gradient-gold hover:opacity-90 text-primary-foreground font-semibold shadow-gold hidden sm:flex"
        >
          <a 
            href={CHECKOUT_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Garantir acesso por R$67"
          >
            Garantir Acesso
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
