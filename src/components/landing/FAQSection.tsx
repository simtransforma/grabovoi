import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Como eu recebo o acesso?",
    answer: "Após a compra, você recebe instruções e acesso ao material digital e à plataforma imediatamente no seu e-mail.",
  },
  {
    question: "Serve para iniciantes?",
    answer: "Sim. O guia e o vídeo explicativo mostram como escolher e aplicar de forma simples. Se você nunca usou códigos de Grabovoi, vai aprender desde o começo.",
  },
  {
    question: "Em quanto tempo vejo resultados?",
    answer: "Isso varia de pessoa para pessoa. A proposta é te dar método, clareza e consistência na aplicação. Os resultados dependem de muitos fatores individuais.",
  },
  {
    question: "Preciso 'acreditar' para funcionar?",
    answer: "Você não precisa forçar fé. O mais importante é aplicação consistente, atenção e intenção clara.",
  },
  {
    question: "Isso substitui tratamento médico/terapia?",
    answer: "Não. É um material de desenvolvimento pessoal/espiritual e não substitui acompanhamento profissional. Não interrompa tratamentos.",
  },
  {
    question: "Se eu tiver dúvida, como funciona o suporte?",
    answer: "Você terá acesso ao nosso suporte para dúvidas. Os canais e horários são informados após a compra.",
  },
  {
    question: "Por quanto tempo é a promoção?",
    answer: "Por tempo limitado. Depois o valor volta para R$197. Recomendamos garantir sua entrada enquanto o preço promocional está disponível.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Perguntas{" "}
              <span className="text-gradient-gold">Frequentes</span>
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-secondary/50 border border-border/50 rounded-lg px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
