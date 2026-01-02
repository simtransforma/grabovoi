import heroEdson from "@/assets/hero-edson.jpg";

const HeroSection = () => {
  return (
    <section className="relative">
      {/* Text content */}
      <div className="container py-12 md:py-20">
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
        </div>
      </div>
      
      {/* Hero image - full width, edge to edge */}
      <div className="w-full">
        <img 
          src={heroEdson} 
          alt="Edson Burger com o Guia de Códigos de Grabovoi"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
