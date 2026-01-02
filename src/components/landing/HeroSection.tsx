import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Sparkles, BookOpen, Video, Users } from "lucide-react";
import ebookMockup from "@/assets/ebook-mockup.png";

const CHECKOUT_URL = "https://pay.hotmart.com/M102774668D?off=3cj9etar&checkoutMode=10";

const benefits = [
  "+500 códigos organizados por áreas da vida (amor, dinheiro, família, foco, bem-estar e mais)",
  "Técnicas práticas para aplicar no dia a dia (mentalização, escrita, repetição/vocalização e rotinas)",
  "Plataforma exclusiva com videoaulas: você vê como fazer na prática",
  "Mentor online para tirar dúvidas + acompanhamento",
  "Acesso imediato após a compra",
];

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-primary/20">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Promoção de Início de Ano</span>
              </div>
              
              <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Guia de Códigos de Grabovoi para{" "}
                <span className="text-gradient-gold">Manifestação Quântica</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Encontre o código certo em segundos e aplique com um passo a passo claro — 
                com apoio de videoaulas e mentor online para não ficar travado(a) no 
                "não sei como fazer".
              </p>
            </div>

            {/* Benefits */}
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground/90">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Price Card */}
            <Card className="p-6 bg-secondary border-primary/20">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="text-muted-foreground line-through">De R$197</p>
                  <p className="text-3xl font-bold text-primary">
                    Por apenas R$67
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Economize R$130 hoje
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <Button 
                    asChild
                    size="lg"
                    className="bg-gradient-gold hover:opacity-90 text-primary-foreground font-bold shadow-gold animate-pulse-gold"
                  >
                    <a 
                      href={CHECKOUT_URL} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Quero garantir meu acesso por R$67"
                    >
                      QUERO MEU ACESSO
                    </a>
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Checkout seguro • Acesso imediato
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent blur-3xl" />
              <img 
                src={ebookMockup} 
                alt="Guia de Códigos de Grabovoi - Mockup do Ebook"
                className="relative w-full max-w-md lg:max-w-lg drop-shadow-2xl"
              />
              
              {/* Floating badges */}
              <div className="absolute -left-4 top-1/4 bg-card border border-border rounded-lg p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">+500 Códigos</span>
                </div>
              </div>
              
              <div className="absolute -right-4 top-1/2 bg-card border border-border rounded-lg p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <Video className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Videoaulas</span>
                </div>
              </div>
              
              <div className="absolute left-1/4 -bottom-4 bg-card border border-border rounded-lg p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Mentor Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
