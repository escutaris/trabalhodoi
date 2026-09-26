import ScrollReveal from "./ScrollReveal";
import { Flame, Building2, UserX } from "lucide-react";

const problems = [
  {
    icon: Flame,
    title: "Burnout silencioso",
    text: "A pessoa mais dedicada da equipe começa a errar e se isola, e ninguém liga isso ao volume de trabalho.",
  },
  {
    icon: Building2,
    title: "Cultura do adoecimento",
    text: "Hora extra virou regra, cobrança em público virou estilo de gestão, e ninguém mais estranha.",
  },
  {
    icon: UserX,
    title: "Líderes sem ferramentas",
    text: "O gestor percebe que algo vai mal, mas não sabe o que perguntar nem o que mudar.",
  },
];

const ProblemSection = () => (
  <section className="border-t border-border py-14 md:py-20">
    <div className="container">
      <ScrollReveal>
        <h2 className="mb-8 text-center md:mb-14 text-3xl font-semibold md:text-4xl">
          O trabalho pode adoecer. Em silêncio.
        </h2>
      </ScrollReveal>
      <div className="grid gap-6 md:grid-cols-3 md:gap-8">
        {problems.map((p, i) => (
          <ScrollReveal key={p.title} delay={i * 0.1}>
            <div className="flex items-start gap-4 text-left md:block md:text-center">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-secondary/10 md:mx-auto md:mb-5 md:h-14 md:w-14">
                <p.icon className="h-5 w-5 text-secondary md:h-6 md:w-6" />
              </div>
              <div>
                <h3 className="mb-1 font-serif text-lg font-semibold md:mb-2 md:text-xl">{p.title}</h3>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
