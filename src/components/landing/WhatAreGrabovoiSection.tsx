import { Target, Repeat, ClipboardCheck, Hash } from "lucide-react";
import heroTransition from "@/assets/hero-transition.png";

const steps = [
  {
    icon: Target,
    text: "escolhe um objetivo (ex.: paz interior, clareza, prosperidade, harmonia familiar);",
  },
  {
    icon: Hash,
    text: "aplica o código com intenção;",
  },
  {
    icon: Repeat,
    text: "repete por alguns minutos por dia;",
  },
  {
    icon: ClipboardCheck,
    text: "registra e ajusta com consistência.",
  },
];

const WhatAreGrabovoiSection = () => {
  return (
    <section className="pt-0 pb-16 md:pb-24">
      {/* Imagem de transição - conecta com a seção anterior */}
      <div className="w-full flex justify-center mb-12 md:mb-16">
        <img 
          src={heroTransition} 
          alt="Edson Burger com o Guia de Códigos de Grabovoi" 
          className="w-full max-w-4xl h-auto px-4"
        />
      </div>
      
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
              O que são os Códigos de Grabovoi{" "}
              <span className="text-gradient-gold">(de forma prática)</span>
            </h2>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Pense neles como sequências numéricas usadas como uma ferramenta de foco.
            </p>
          </div>

          <div className="mb-8">
            <p className="text-lg text-foreground/90 mb-6 text-center">
              Na prática, o que você faz é:
            </p>
            <ul className="space-y-4">
              {steps.map((step, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-card/60 backdrop-blur-sm border border-border/50"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-lg text-foreground/90 pt-1.5">{step.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-lg bg-primary/10 border border-primary/20 text-center space-y-4">
            <p className="text-lg text-foreground/90 leading-relaxed">
              É simples. E é exatamente por isso que funciona tão bem como rotina diária:
              <br />
              <span className="font-medium">
                não exige "estar perfeito", não exige horas de meditação, e não depende de "motivação".
              </span>
            </p>
            <p className="text-xl font-semibold text-primary">
              Depende de direção + repetição.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatAreGrabovoiSection;
