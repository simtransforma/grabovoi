import { Card } from "@/components/ui/card";
import { Gift, Clock } from "lucide-react";

const PriceSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            Por que hoje está{" "}
            <span className="text-gradient-gold">R$19,90</span>{" "}
            (e depois volta para R$197)?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Estamos em promoção de início de ano para facilitar o acesso a quem quer 
            começar o ano com mais direção e constância. É uma condição por tempo limitado, 
            sem truques ou urgência falsa — apenas uma oportunidade real de entrar por menos.
          </p>
          
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-transparent border-primary/30">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-muted-foreground" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Preço normal</p>
                  <p className="text-2xl font-bold text-muted-foreground line-through">R$197</p>
                </div>
              </div>
              
              <div className="hidden md:block w-px h-16 bg-border" />
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Gift className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-primary font-medium">Preço promocional</p>
                  <p className="text-3xl font-bold text-primary">R$19,90</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
