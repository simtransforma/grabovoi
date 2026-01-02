import { AlertCircle, ArrowRight, CheckCircle } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold">
            Você não precisa de mais "uma técnica"…{" "}
            <span className="text-gradient-gold">
              você precisa de um caminho simples que dá para seguir
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 text-left mt-12">
            {/* Problem */}
            <div className="space-y-4 p-6 rounded-lg bg-destructive/5 border border-destructive/20">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-destructive" />
                <h3 className="font-semibold text-lg">O problema comum</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Excesso de informação espalhada por todo lugar</li>
                <li>• Tenta uma técnica, para, e nunca sabe se fez certo</li>
                <li>• Dúvida constante: "será que estou aplicando direito?"</li>
                <li>• Sensação de bloqueio e desânimo</li>
              </ul>
            </div>
            
            {/* Solution */}
            <div className="space-y-4 p-6 rounded-lg bg-primary/5 border border-primary/20">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-lg">A solução</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Um guia organizado com tudo num só lugar</li>
                <li>• Método claro de aplicação com passo a passo</li>
                <li>• Videoaulas mostrando na prática como fazer</li>
                <li>• Mentor para tirar dúvidas quando travar</li>
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
