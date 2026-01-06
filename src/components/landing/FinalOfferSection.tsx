import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Gift, ArrowRight, Check } from "lucide-react";

const CHECKOUT_URL = "https://pay.hotmart.com/M102774668D?off=3cj9etar&checkoutMode=10";

const microcopy = [
  "Acesso imediato",
  "Compra segura",
  "Conteúdo digital",
  "Suporte + mentoria na plataforma",
];

const FinalOfferSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 md:p-12 bg-card/80 backdrop-blur-md border-primary/30 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Gift className="h-8 w-8 text-primary" />
              <h2 className="font-playfair text-2xl md:text-3xl font-bold">
                Oferta de começo de ano
              </h2>
            </div>

            <p className="text-muted-foreground mb-6">(por tempo limitado)</p>

            <div className="mb-6">
              <p className="text-lg text-muted-foreground">
                🎁 De <span className="line-through">R$197</span> por
              </p>
              <p className="text-5xl md:text-6xl font-bold text-primary mt-2">R$27,90</p>
            </div>

            <p className="text-foreground/80 mb-8">
              Assim que o lote promocional encerrar, o valor volta para R$197.
            </p>

            <Button
              asChild
              size="lg"
              className="w-full bg-gradient-gold hover:opacity-90 text-primary-foreground font-bold text-lg py-6 shadow-gold"
            >
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Garantir R$27,90 e começar agora"
              >
                <span className="hidden md:inline">GARANTIR R$27,90 E COMEÇAR AGORA</span>
                <span className="md:hidden">GARANTIR ACESSO</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {microcopy.map((item, index) => (
                <div key={index} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FinalOfferSection;
