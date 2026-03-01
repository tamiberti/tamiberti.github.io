import { Brain, HeartCrack, Flame, SearchX, ThumbsDown } from "lucide-react";

const topics = [
  {
    icon: Brain,
    title: "Problemas de ansiedade",
    description:
      "Pensamentos acelerados, inseguranças e preocupações que tomam conta da rotina.",
  },
  {
    icon: HeartCrack,
    title: "Dificuldades nos relacionamentos",
    description:
      "Conflitos frequentes, dificuldade de comunicação ou repetições que causam sofrimento.",
  },
  {
    icon: Flame,
    title: "Estresse e esgotamento emocional",
    description:
      "Sensação de sobrecarga no trabalho ou na vida pessoal, que afeta seu bem-estar.",
  },
  {
    icon: SearchX,
    title: "Autocrítica excessiva",
    description:
      "Exigência constante, culpa recorrente e dificuldade de reconhecer suas conquistas.",
  },
  {
    icon: ThumbsDown,
    title: "Baixa autoestima",
    description:
      "Sentimento de inadequação, comparação constante e dificuldade em se valorizar.",
  },
];

const TherapyTopics = () => {
  return (
    <section id="psicoterapia" className="py-24 md:py-32 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-normal text-foreground">
            Mesmo as situações que parecem pequenas merecem{" "}
            <span className="underline decoration-primary underline-offset-4">
              atenção e cuidado.
            </span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground font-light">
            A terapia pode ajudar você a compreender e lidar com:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 text-center space-y-4 shadow-soft border border-border/30"
            >
              <div className="flex justify-center">
                <topic.icon className="w-12 h-12 text-primary" strokeWidth={1.2} />
              </div>
              <h3 className="text-lg font-playfair font-semibold text-primary-foreground italic">
                {topic.title}
              </h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                {topic.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TherapyTopics;
