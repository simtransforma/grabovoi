import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Video, Users, Check } from "lucide-react";
import ebookMockup from "@/assets/ebook-mockup.png";

const deliverables = [
  {
    icon: BookOpen,
    title: 'Ebook/PDF "Guia de Códigos de Grabovoi para Manifestação Quântica"',
    features: [
      "Biblioteca completa e organizada",
      "Categorias para consultar rápido",
      "Técnicas de aplicação explicadas",
    ],
  },
  {
    icon: Video,
    title: "Plataforma exclusiva com videoaulas (passo a passo)",
    features: [
      "Como escolher o código certo",
      "Como aplicar (na prática) sem complicar",
      "Rotina simples para manter consistência",
      "Erros comuns que fazem a pessoa achar que 'não funciona'",
    ],
  },
  {
    icon: Users,
    title: "Mentor online + acompanhamento",
    features: [
      "Tire dúvidas quando travar",
      "Receba orientação para ajustar sua aplicação",
      "Acompanhamento para manter constância",
    ],
  },
];

const DeliverablesSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            O que você recebe{" "}
            <span className="text-gradient-gold">assim que entra</span>
          </h2>
        </div>
        
        {/* Ebook Mockup Highlight */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <img 
              src={ebookMockup} 
              alt="Guia de Códigos de Grabovoi - Ebook"
              className="w-64 md:w-80 drop-shadow-2xl"
            />
            <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {deliverables.map((item, index) => (
            <Card 
              key={index}
              className="bg-card border-border/50 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-playfair text-lg leading-tight">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {item.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliverablesSection;
