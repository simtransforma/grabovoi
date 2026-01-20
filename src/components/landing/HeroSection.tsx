import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Lock } from "lucide-react";
import { useLeadCapture } from "@/contexts/LeadCaptureContext";

const HeroSection = () => {
  const { openLeadCapture } = useLeadCapture();
  
  return (
    <header className="relative">
      {/* Hero banner - transparent PNG over galaxy background */}
      <div className="w-full flex justify-center -mb-8 md:-mb-16">
        
      </div>

      {/* Text content - centered */}
      <div className="container py-10 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Comece o ano ativando sua nova realidade em poucos minutos por dia
          </h1>

          <p className="mt-5 text-base md:text-lg text-foreground/85 leading-relaxed">
            Um método simples e guiado para aplicar os Códigos de Grabovoi com intenção, clareza e direção — sem rituais complicados,
            sem "achismo" e com acesso a uma plataforma com 1 vídeo completo e explicativo de como usar o guia, além de suporte para dúvidas.
          </p>

          <ul className="mt-7 grid gap-3 text-left max-w-2xl mx-auto">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
                <Check className="h-4 w-4 text-primary" />
              </span>
              <span className="text-foreground/90">Guia completo (PDF)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
                <Check className="h-4 w-4 text-primary" />
              </span>
              <span className="text-foreground/90">Plataforma exclusiva com 1 vídeo completo e explicativo</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
                <Check className="h-4 w-4 text-primary" />
              </span>
              <span className="text-foreground/90">Suporte para dúvidas</span>
            </li>
          </ul>

          <div className="mt-7 space-y-2">
            <p className="text-sm md:text-base text-foreground/90">
              <span className="font-medium">Oferta de começo de ano:</span> <span className="line-through text-muted-foreground">de R$197</span> por{" "}
              <span className="text-primary font-semibold">R$19,90</span> (por tempo limitado)
            </p>
            <p className="text-sm text-foreground/80 inline-flex items-center justify-center gap-2">
              <Lock className="h-4 w-4 text-primary" />
              Acesso imediato após a compra.
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <Button 
              id="hero-cta"
              size="lg" 
              className="bg-gradient-gold hover:opacity-90 text-primary-foreground font-bold shadow-gold"
              onClick={openLeadCapture}
            >
              <span className="hidden md:inline">QUERO GARANTIR MEU ACESSO POR R$19,90 AGORA</span>
              <span className="md:hidden">GARANTIR ACESSO</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <p className="mt-3 text-xs text-muted-foreground">
            Conteúdo digital • Compra segura • Suporte
          </p>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
