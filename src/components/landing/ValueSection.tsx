import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";

const CHECKOUT_URL = "https://pay.hotmart.com/M102774668D?off=3cj9etar&checkoutMode=10";

const benefits = [
  "um método organizado por áreas da vida,",
  "uma rotina que cabe no seu dia,",
  "aulas em vídeo pra aplicar certo,",
  "e suporte humano pra não desistir.",
];

const stackItems = [
  "Guia completo + organização por áreas",
  "Plataforma com aulas em vídeo",
  "Mentoria online + acompanhamento",
];

const ValueSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
              Por que isso vale muito mais do que{" "}
              <span className="text-gradient-gold">R$67</span>?
            </h2>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Porque você não está comprando um "arquivo".
            </p>
          </div>

          <div className="mb-10">
            <p className="text-lg text-foreground/90 mb-4 text-center">Você está comprando:</p>
            <ul className="space-y-3 max-w-xl mx-auto">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/20">
                    <Check className="h-3 w-3 text-primary" />
                  </span>
                  <span className="text-foreground/90">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <Card className="p-8 bg-card/80 backdrop-blur-md border-primary/20">
            <p className="text-lg text-foreground/90 mb-6 text-center">
              Se você fosse adquirir separado:
            </p>
            <ul className="space-y-3 mb-8 max-w-lg mx-auto">
              {stackItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50"
                >
                  <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-center text-foreground/80 mb-6">
              …o valor real facilmente passaria de algumas centenas de reais.
            </p>

            <div className="border-t border-border pt-6 space-y-4 text-center">
              <p className="text-foreground/80">Mas por tempo limitado, pra abrir o ano com tudo:</p>
              <div>
                <p className="text-sm text-primary">✅ Hoje:</p>
                <p className="text-4xl font-bold text-primary">R$67</p>
              </div>
              <p className="text-sm text-muted-foreground">
                🔁 Depois: volta para R$197
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
                  aria-label="Sim — quero entrar agora por R$67"
                >
                  SIM — QUERO ENTRAR AGORA POR R$67
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
