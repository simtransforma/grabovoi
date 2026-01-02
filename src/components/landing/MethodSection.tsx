import { Target, Hash, Zap, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Target,
    number: "1",
    title: "Defina uma intenção clara",
    description: "O que você quer de verdade?",
  },
  {
    icon: Hash,
    number: "2",
    title: "Escolha o código",
    description: "Dentro da categoria certa",
  },
  {
    icon: Zap,
    number: "3",
    title: "Aplique usando uma técnica prática",
    description: "Mentalização, escrita, repetição/vocalização ou rotina diária",
  },
];

const MethodSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            O método simples:{" "}
            <span className="text-gradient-gold">Intenção + Código + Aplicação</span>
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center space-y-4">
                  <div className="relative mx-auto">
                    <div className="w-20 h-20 rounded-full bg-gradient-gold flex items-center justify-center mx-auto">
                      <step.icon className="h-10 w-10 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                      <span className="font-bold text-primary">{step.number}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-playfair text-xl font-semibold">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow between steps (hidden on last step and mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-4 transform translate-x-1/2">
                    <ArrowRight className="h-6 w-6 text-primary/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-foreground/90 font-medium italic">
              "Você não vai ficar só com uma lista de números — 
              <span className="text-primary"> você vai ter direção para aplicar.</span>"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
