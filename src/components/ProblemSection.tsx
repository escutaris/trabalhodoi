import ScrollReveal from "./ScrollReveal";
import { Flame, Building2, UserX } from "lucide-react";

const problems = [
  {
    icon: Flame,
    title: "Burnout silencioso",
    text: "Quando o esgotamento se instala antes de ser nomeado.",
  },
  {
    icon: Building2,
    title: "Cultura do adoecimento",
    text: "Ambientes que normalizam o que deveria ser inaceitável.",
  },
  {
    icon: UserX,
    title: "Líderes sem ferramentas",
    text: "Boa intenção sem método não transforma organizações.",
  },
];

const ProblemSection = () => (
  <section className="border-t border-border py-20">
    <div className="container">
      <ScrollReveal>
        <h2 className="mb-14 text-center text-3xl font-semibold md:text-4xl">
          O trabalho pode adoecer. Em silêncio.
        </h2>
      </ScrollReveal>
      <div className="grid gap-8 md:grid-cols-3">
        {problems.map((p, i) => (
          <ScrollReveal key={p.title} delay={i * 0.1}>
            <div className="text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10">
                <p.icon className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="mb-2 font-serif text-xl font-semibold">{p.title}</h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
