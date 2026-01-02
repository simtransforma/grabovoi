import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BookOpen,
  Video,
  Users,
  Check,
  Wrench,
  Heart,
  DollarSign,
  Home,
  Briefcase,
  Smile,
  BookMarked,
} from "lucide-react";

const categories = [
  { icon: Heart, label: "Amor & Relacionamentos (autoconfiança, conexão, harmonia, comunicação)" },
  { icon: DollarSign, label: "Abundância Financeira & Dinheiro (prosperidade, fluxo, oportunidades, segurança)" },
  { icon: Home, label: "Família & Harmonia (paz no lar, resolução de conflitos, união)" },
  { icon: Briefcase, label: "Vida Profissional & Negócios (produtividade, organização, resultados, vendas, criatividade)" },
  { icon: Smile, label: "Emoções & Bem‑Estar (calma, autoestima, redução do estresse, clareza)" },
  { icon: BookMarked, label: "Estudos & Aprendizado (foco, memória, concentração)" },
];

const videoFeatures = [
  "como escolher o código certo",
  "como aplicar no dia a dia (sem complicação)",
  "como montar sua rotina de 7/14/21 dias",
  "como registrar resultados e ajustar",
  "como não se sabotar com ansiedade e desistir no meio",
];

const mentorFeatures = [
  "tirar dúvidas que surgirem;",
  "corrigir aplicação (quando necessário);",
  "orientar sua rotina;",
  "ajudar você a manter constância.",
];

const DeliverablesSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              O que você recebe{" "}
              <span className="text-gradient-gold">ao entrar hoje</span>
            </h2>
          </div>

          {/* 1) O Guia Completo */}
          <Card className="mb-8 bg-card/80 backdrop-blur-md border-border/50">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-playfair text-xl">
                  1) O Guia Completo (PDF) – "o manual da transformação"
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/90 mb-4">
                Você vai encontrar códigos organizados por áreas, como:
              </p>
              <ul className="grid md:grid-cols-2 gap-3 mb-4">
                {categories.map((cat, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <cat.icon className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-foreground/85">{cat.label}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-foreground/80 mb-4">
                e outras categorias para você aplicar de forma prática no dia a dia.
              </p>
              <p className="text-sm text-primary font-medium">
                📌 O diferencial aqui é organização: você abre, encontra a área e aplica.
              </p>
            </CardContent>
          </Card>

          {/* 2) Caixa de Ferramentas */}
          <Card className="mb-8 bg-card/80 backdrop-blur-md border-border/50">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-playfair text-xl">
                  2) Uma "Caixa de Ferramentas" para usar todos os dias
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/90 mb-4">
                Sabe quando você quer começar, mas não sabe por onde?
              </p>
              <p className="text-foreground/90 mb-4">
                A caixa de ferramentas te dá um caminho: códigos "base" para você usar como rotina, especialmente no início.
              </p>
              <p className="text-primary font-medium">
                É o tipo de coisa que tira você do zero e coloca você em movimento.
              </p>
            </CardContent>
          </Card>

          {/* 3) Plataforma com Videoaulas */}
          <Card className="mb-8 bg-card/80 backdrop-blur-md border-border/50">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Video className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-playfair text-xl">
                  3) Acesso a uma Plataforma Exclusiva com Videoaulas (passo a passo)
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/90 mb-4">
                Aqui está o que a maioria dos materiais <span className="font-semibold">NÃO tem</span> — e que muda tudo:
              </p>
              <p className="text-foreground/85 mb-4">
                Em vez de você ficar lendo e pensando "tá, mas como eu aplico isso na prática?"…
                você entra na plataforma e assiste às aulas mostrando:
              </p>
              <ul className="space-y-2 mb-4">
                {videoFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground/85">{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-primary font-medium">
                Ou seja: você tem o caminho guiado, em vídeo.
              </p>
            </CardContent>
          </Card>

          {/* 4) Mentoria Online */}
          <Card className="bg-card/80 backdrop-blur-md border-primary/30">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-playfair text-xl">
                  4) Mentoria Online + Acompanhamento (pra você não travar)
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/90 mb-4 font-semibold">
                Você não vai ficar sozinha(o).
              </p>
              <p className="text-foreground/85 mb-4">
                Na plataforma, você terá acesso a um mentor online para:
              </p>
              <ul className="space-y-2 mb-4">
                {mentorFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground/85">{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-primary font-medium">
                Isso é o que transforma um "PDF parado" em uma experiência acompanhada.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DeliverablesSection;
