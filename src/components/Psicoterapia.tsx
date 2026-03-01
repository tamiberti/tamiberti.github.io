import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqItems = [
  {
    question: "Quando devo buscar a psicoterapia?",
    answer:
      "A psicoterapia pode ser buscada em diferentes momentos da vida: quando você sente que precisa de apoio emocional, está passando por um momento difícil, enfrenta mudanças importantes ou simplesmente deseja se conhecer melhor. Não é preciso estar em crise para começar, o cuidado com a saúde mental pode ser preventivo e transformador.",
  },
  {
    question: "Quanto tempo dura cada sessão e com que frequência elas acontecem?",
    answer:
      "Cada sessão tem duração de 50 minutos e, geralmente, ocorre uma vez por semana. No entanto, a frequência pode ser ajustada conforme as necessidades do paciente e a evolução do tratamento.",
  },
  {
    question: "Como funcionam as sessões online?",
    answer:
      "As sessões online acontecem através de plataforma de videochamada. É essencial que o paciente esteja em um local tranquilo, onde possa falar livremente, sem interrupções. Para garantir o melhor aproveitamento da sessão, é importante que o ambiente tenha boa iluminação e uma conexão de internet estável.",
  },
  {
    question: "Qual o valor da sessão?",
    answer:
      "Para maiores informações entre em contato pelo WhatsApp.",
  },
];

const Psicoterapia = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="duvidas"
      className="py-24 md:py-32 px-6 animate-page-enter bg-primary/30"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16">
          {/* Left side - Title */}
          <div className="md:w-1/3 flex-shrink-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-normal text-[#806751] leading-tight">
              Dúvidas
              <br />
              Frequentes
            </h2>
          </div>

          {/* Right side - Accordion */}
          <div className="flex-1 space-y-4 w-full">
            {faqItems.map((item, index) => (
              <div key={index}>
                {/* Trigger */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between bg-background/60 backdrop-blur-sm rounded-full px-6 py-4 text-left transition-all hover:bg-background/80"
                >
                  <span className="text-base md:text-lg font-light text-[#806751]">
                    {item.question}
                  </span>
                  <span className="ml-4 flex-shrink-0 text-[#806751]">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </span>
                </button>

                {/* Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100 mt-2"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 py-4 text-base md:text-lg leading-relaxed text-foreground/90 font-light text-justify">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Psicoterapia;
