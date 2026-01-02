import { Check, Sparkles } from "lucide-react";

const targetAudience = [
  "Quer começar o ano com mais direção, energia e constância",
  "Gosta de práticas de manifestação, números e espiritualidade, mas quer algo mais aplicável",
  "Quer um material organizado (sem ficar caçando código em todo lugar)",
  "Quer aprender o 'como usar' com exemplos (videoaulas)",
  "Quer ter a quem recorrer quando bater dúvida (mentor + acompanhamento)",
];

const ForWhoSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Esse guia é para você que…
            </h2>
          </div>
          
          <ul className="space-y-4">
            {targetAudience.map((item, index) => (
              <li 
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50 border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                </div>
                <span className="text-lg text-foreground/90">{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-8 p-6 rounded-lg bg-primary/10 border border-primary/20 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="font-semibold text-primary">Nota especial</span>
            </div>
            <p className="text-foreground/90">
              E se você for iniciante, melhor ainda: você vai seguir o passo a passo desde o começo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
