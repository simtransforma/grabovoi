import authorPhoto from "@/assets/author-photo.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background with author photo */}
      <div className="absolute inset-0 z-0">
        <img 
          src={authorPhoto} 
          alt="Edson Burger com o Guia de Códigos de Grabovoi"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-2xl">
          <p className="text-primary font-medium mb-6 text-sm md:text-base tracking-wide">
            Para quem já conhece os códigos, mas ainda trava na hora de usar
          </p>
          
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
            E se você pudesse ter{" "}
            <span className="text-gradient-gold">clareza</span> sobre qual código usar — e como aplicar — sem ficar perdido?
          </h1>
          
          <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
            <p>
              Você provavelmente já conhece os códigos de Grabovoi. Talvez tenha até tentado usar alguns.
            </p>
            <p>
              Mas a sensação de <em>"será que estou fazendo certo?"</em> pode travar qualquer prática. 
              A dúvida sobre qual código escolher, como aplicar, com que frequência... 
              tudo isso vai minando a confiança.
            </p>
            <p className="text-foreground font-medium">
              Não precisa ser assim.
            </p>
          </div>
          
          <div className="mt-10 flex items-center gap-4">
            <div className="w-12 h-px bg-primary/50" />
            <span className="text-sm text-muted-foreground">
              Role para descobrir um caminho mais simples
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
