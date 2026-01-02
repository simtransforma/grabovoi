import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Lock } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const CHECKOUT_URL = "https://pay.hotmart.com/M102774668D?off=3cj9etar&checkoutMode=10";

const HeroSection = () => {
  return (
    <header className="relative">
      {/* Hero banner - full width at the very top */}
      <div className="w-full">
        <img
          src={heroBanner}
          alt="Guia de Códigos de Grabovoi para Manifestação Quântica - Edson Burger"
          className="w-full h-auto object-cover"
          loading="eager"
        />
      </div>

      {/* Text content - centered */}
      <div className="container py-10 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Comece o ano ativando sua nova realidade em poucos minutos por dia
          </h1>

          <p className="mt-5 text-base md:text-lg text-foreground/85 leading-relaxed">
            Um método simples e guiado para aplicar os Códigos de Grabovoi com intenção, clareza e direção — sem rituais complicados,
            sem "achismo" e com acompanhamento de um mentor online.
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
              <span className="text-foreground/90">Plataforma exclusiva com videoaulas</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
                <Check className="h-4 w-4 text-primary" />
              </span>
              <span className="text-foreground/90">Mentoria online para dúvidas e acompanhamento</span>
            </li>
          </ul>

          <div className="mt-7 space-y-2">
            <p className="text-sm md:text-base text-foreground/90">
              <span className="font-medium">Oferta de começo de ano:</span> <span className="line-through text-muted-foreground">de R$197</span> por{" "}
              <span className="text-primary font-semibold">R$67</span> (por tempo limitado)
            </p>
            <p className="text-sm text-foreground/80 inline-flex items-center justify-center gap-2">
              <Lock className="h-4 w-4 text-primary" />
              Acesso imediato após a compra.
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-gold hover:opacity-90 text-primary-foreground font-bold shadow-gold"
            >
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Quero garantir meu acesso por R$67 agora"
              >
                QUERO GARANTIR MEU ACESSO POR R$67 AGORA
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          <p className="mt-3 text-xs text-muted-foreground">
            Conteúdo digital • Compra segura • Suporte + mentoria na plataforma
          </p>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
