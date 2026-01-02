import ebookMockup from "@/assets/ebook-mockup-new.png";

const PresentingSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <div className="text-center md:text-left order-2 md:order-1">
              <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                Apresento:{" "}
                <span className="text-gradient-gold">
                  Guia de Códigos de Grabovoi para Manifestação Quântica
                </span>
              </h2>
              <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                Um manual organizado para você parar de procurar em mil lugares e começar a aplicar uma prática objetiva.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                Você vai ter em mãos um material estruturado por áreas da vida, para consultar rapidamente e aplicar com clareza.
              </p>
            </div>

            {/* Ebook Mockup */}
            <div className="flex justify-center order-1 md:order-2">
              <div className="relative">
                <img
                  src={ebookMockup}
                  alt="Guia de Códigos de Grabovoi - Ebook"
                  className="w-64 md:w-80 drop-shadow-2xl"
                />
                <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentingSection;
