import heroEdson from "@/assets/hero-edson.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen">
      {/* Content */}
      <div className="container py-12 md:py-20">
        {/* Text content */}
        <div className="max-w-2xl mb-8 md:mb-12">
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
        </div>
        
        {/* Hero image - full image display */}
        <div className="relative flex justify-center md:justify-end">
          <img 
            src={heroEdson} 
            alt="Edson Burger com o Guia de Códigos de Grabovoi"
            className="w-full max-w-4xl h-auto object-contain rounded-lg"
          />
        </div>
        
        <div className="mt-8 flex items-center gap-4">
          <div className="w-12 h-px bg-primary/50" />
          <span className="text-sm text-muted-foreground">
            Role para descobrir um caminho mais simples
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
