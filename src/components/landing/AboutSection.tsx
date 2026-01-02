import { Card } from "@/components/ui/card";
import { BookOpen, Award, Heart } from "lucide-react";
import authorPhoto from "@/assets/author-photo.jpg";

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Quem está{" "}
              <span className="text-gradient-gold">por trás do guia</span>
            </h2>
          </div>
          
          <Card className="p-8 bg-card border-border/50">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary/30">
                  <img 
                    src={authorPhoto} 
                    alt="Edson Burger - Autor do Guia de Códigos de Grabovoi"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="text-center md:text-left space-y-4">
                <h3 className="font-playfair text-2xl font-bold">
                  Edson Burger
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Autor do "Guia de Códigos de Grabovoi para Manifestação Quântica", 
                  Edson é estudioso e praticante de técnicas de manifestação e 
                  desenvolvimento pessoal há anos. Criou este material com o objetivo 
                  de simplificar o acesso e a aplicação dos códigos de Grabovoi para 
                  pessoas que buscam mais clareza e consistência em suas práticas.
                </p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span>Autor e pesquisador</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Award className="h-4 w-4 text-primary" />
                    <span>Anos de estudo</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Heart className="h-4 w-4 text-primary" />
                    <span>Propósito de ajudar</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
