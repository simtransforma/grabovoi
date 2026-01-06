import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";

const CHECKOUT_URL = "https://pay.hotmart.com/M102774668D?off=3cj9etar&checkoutMode=10";

const stackItems = [
  { item: 'Guia completo em PDF', value: "R$197" },
  { item: "Plataforma de videoaulas", value: "R$197+" },
  { item: "Mentor online + acompanhamento", value: "R$197+" },
];

const StackSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Resumo da sua{" "}
              <span className="text-gradient-gold">entrada hoje</span>
            </h2>
          </div>
          
          <Card className="p-8 bg-card border-primary/20">
            <ul className="space-y-4 mb-8">
              {stackItems.map((item, index) => (
                <li key={index} className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-medium">{item.item}</span>
                  </div>
                  <span className="text-muted-foreground text-sm">
                    (valor estimado {item.value})
                  </span>
                </li>
              ))}
            </ul>
            
            <div className="border-t border-border pt-6 space-y-6">
              <div className="text-center">
                <p className="text-muted-foreground line-through">De R$591+</p>
                <p className="text-3xl md:text-4xl font-bold text-primary">
                  Hoje, por tempo limitado: R$27,90
                </p>
              </div>
              
              <Button 
                asChild
                size="lg"
                className="w-full bg-gradient-gold hover:opacity-90 text-primary-foreground font-bold text-lg py-6 shadow-gold animate-pulse-gold"
              >
                <a 
                  href={CHECKOUT_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Quero garantir meu acesso por R$27,90"
                >
                  <span className="hidden md:inline">QUERO GARANTIR MEU ACESSO POR R$27,90</span>
                  <span className="md:hidden">GARANTIR ACESSO</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              
              <p className="text-center text-sm text-muted-foreground">
                Acesso imediato • Link externo para checkout seguro
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StackSection;
