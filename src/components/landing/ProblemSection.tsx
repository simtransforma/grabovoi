import { AlertCircle, ArrowRight, CheckCircle } from "lucide-react";
import heroTransition from "@/assets/hero-transition.png";

const ProblemSection = () => {
  return (
    <section className="pt-0 pb-16 md:pb-24">
      {/* Imagem de transição - conecta o hero com o conteúdo */}
      <div className="w-full flex justify-center -mt-8 md:-mt-16 mb-12 md:mb-16">
        <img 
          src={heroTransition} 
          alt="Edson Burger com o Guia de Códigos de Grabovoi" 
          className="w-full max-w-4xl h-auto px-4"
        />
      </div>
      
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold">
            Se você sente que…
          </h2>
          
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Então você não precisa de mais um monte de informação solta. Você precisa de um método simples,
            que você consiga aplicar no dia a dia e que te dê a sensação de: <span className="text-foreground font-medium">“Eu sei exatamente o que fazer hoje.”</span>
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 text-left mt-12">
            {/* Problem */}
            <div className="space-y-4 p-6 rounded-lg bg-destructive/5 border border-destructive/20">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-destructive" />
                <h3 className="font-semibold text-lg">Você sente que…</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Sua vida até anda, mas parece que sempre falta algo (dinheiro, paz, direção, energia)</li>
                <li>• Você começa empolgada(o), mas perde a constância e volta pro mesmo ciclo</li>
                <li>• Tem dias em que sua mente não desliga (estresse, ansiedade, preocupação)</li>
                <li>• Você quer prosperar, melhorar relações e destravar… mas não sabe por onde começar</li>
              </ul>
            </div>
            
            {/* Solution */}
            <div className="space-y-4 p-6 rounded-lg bg-primary/5 border border-primary/20">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-lg">O que resolve</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Um método simples e guiado (sem “achismo”)</li>
                <li>• Direção para escolher o código certo para cada objetivo</li>
                <li>• Rotina de poucos minutos por dia (7/14/21 dias)</li>
                <li>• Acompanhamento para tirar dúvidas e manter constância</li>
              </ul>
            </div>
          </div>
          
          <div className="flex justify-center pt-4">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-foreground font-medium">
                Quando existe um guia + método + suporte
              </span>
              <ArrowRight className="h-4 w-4 text-primary" />
              <span className="text-primary font-semibold">
                Consistência e Clareza
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
