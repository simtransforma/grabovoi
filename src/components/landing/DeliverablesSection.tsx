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
  "Como escolher o código certo",
  "Como aplicar no dia a dia (sem complicação)",
  "Como montar uma rotina simples (7/14/21 dias)",
  "Como registrar e ajustar com consistência",
];

const supportFeatures = [
  "Tirar dúvidas que surgirem",
  "Ganhar clareza na escolha do código para o seu objetivo",
  "Entender a melhor forma de aplicação para o seu dia a dia",
  "Seguir com mais consistência sem se perder no processo",
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

          {/* 2) Guia Prático */}
          <Card className="mb-8 bg-card/80 backdrop-blur-md border-border/50">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-playfair text-xl">
                  2) Guia Prático (PDF) – consulta rápida para usar todos os dias
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/90 mb-4">
                Sabe quando você quer começar, mas não sabe por onde?
              </p>
              <p className="text-foreground/90 mb-4">
                O Guia Prático te dá um caminho simples: você abre, encontra a categoria certa e aplica em poucos minutos — ideal para manter constância sem complicar.
              </p>
              <p className="text-primary font-medium">
                É o tipo de material que facilita o começo e transforma intenção em rotina.
              </p>
            </CardContent>
          </Card>

          {/* 3) Plataforma com Vídeo Explicativo */}
          <Card className="mb-8 bg-card/80 backdrop-blur-md border-border/50">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Video className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-playfair text-xl">
                  3) Plataforma Exclusiva com 1 Vídeo Completo e Explicativo (passo a passo)
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/90 mb-4">
                Aqui está o que muda o jogo para quem não quer ficar no "tá, mas como eu aplico isso na prática?"
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
                Ou seja: você tem o caminho guiado em um único vídeo, direto ao ponto.
              </p>
            </CardContent>
          </Card>

          {/* 4) Suporte para Dúvidas */}
          <Card className="bg-card/80 backdrop-blur-md border-primary/30">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-playfair text-xl">
                  4) Suporte para Dúvidas (pra você não travar)
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/90 mb-4 font-semibold">
                Se surgir qualquer dúvida durante a aplicação, você tem suporte para te orientar.
              </p>
              <ul className="space-y-2 mb-4">
                {supportFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground/85">{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-primary font-medium">
                Isso evita travas e acelera sua aplicação com mais segurança.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DeliverablesSection;
