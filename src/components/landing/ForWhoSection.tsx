import { Check, X } from "lucide-react";

const forYou = [
  "quer uma prática simples e aplicável (sem complicar)",
  "quer melhorar energia, foco, clareza e constância",
  "quer trabalhar prosperidade, relações e bem‑estar com método",
  "quer aprender com vídeo e ter apoio de mentor",
];

const notForYou = [
  'quer "milagre" sem fazer nada e sem constância',
  "quer uma promessa impossível (o método depende de prática)",
  "procura substituto para acompanhamento profissional em saúde (aqui é prática complementar de desenvolvimento pessoal)",
];

const ForWhoSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold">
              Pra quem é{" "}
              <span className="text-gradient-gold">(e pra quem não é)</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Para você que */}
            <div className="p-6 rounded-lg bg-card/60 backdrop-blur-sm border border-primary/30">
              <h3 className="font-playfair text-xl font-semibold mb-4 text-primary">
                Isso é pra você que:
              </h3>
              <ul className="space-y-3">
                {forYou.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/20">
                      <Check className="h-3 w-3 text-primary" />
                    </span>
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* NÃO é para você que */}
            <div className="p-6 rounded-lg bg-card/60 backdrop-blur-sm border border-border/50">
              <h3 className="font-playfair text-xl font-semibold mb-4 text-muted-foreground">
                Isso NÃO é pra você que:
              </h3>
              <ul className="space-y-3">
                {notForYou.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-destructive/20">
                      <X className="h-3 w-3 text-destructive" />
                    </span>
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
