import { Heart, DollarSign, Home, Users, BookOpen, Briefcase, Smile, Activity, Shield, Sparkles } from "lucide-react";

const categories = [
  { icon: Heart, label: "Amor & Relacionamentos" },
  { icon: DollarSign, label: "Abundância Financeira & Dinheiro" },
  { icon: Home, label: "Família & Harmonia" },
  { icon: Users, label: "Amizade & Conexões" },
  { icon: BookOpen, label: "Estudos & Aprendizado" },
  { icon: Briefcase, label: "Vida Profissional & Negócios" },
  { icon: Smile, label: "Emoções & Bem-Estar" },
  { icon: Activity, label: "Saúde e Equilíbrio*" },
  { icon: Shield, label: "Proteção Energética e Despertar" },
  { icon: Sparkles, label: "Condições Específicas (rotinas e intenções)" },
];

const ContentSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Conteúdo organizado para você{" "}
            <span className="text-gradient-gold">consultar em segundos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Você abre, encontra a área da vida e já sabe por onde começar.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="p-4 rounded-lg bg-card border border-border/50 hover:border-primary/30 transition-all text-center group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/30 transition-colors">
                <category.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground/90">
                {category.label}
              </span>
            </div>
          ))}
        </div>
        
        <p className="text-center mt-8 text-muted-foreground">
          E muito mais…
        </p>
        
        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground italic max-w-xl mx-auto">
            *Conteúdos de saúde, bem-estar e equilíbrio são informativos e educacionais. 
            Não substituem diagnóstico, tratamento ou acompanhamento de profissionais de saúde.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
