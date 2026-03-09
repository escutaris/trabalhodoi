import ScrollReveal from "./ScrollReveal";
import { Check } from "lucide-react";

const items = [
  "Você lidera equipes e quer criar um ambiente psicologicamente seguro",
  "Você atua em RH ou saúde ocupacional e precisa de embasamento prático",
  "Você sentiu que o trabalho começou a custar mais do que deveria",
  "Você quer entender o adoecimento antes de tratá-lo",
  "Você busca uma abordagem que una ciência e humanidade",
  "Você acredita que bem-estar e produtividade não são opostos",
];

const ForWhoSection = () => (
  <section className="border-t border-border py-20">
    <div className="container max-w-4xl">
      <ScrollReveal>
        <h2 className="mb-12 text-center text-3xl font-semibold md:text-4xl">
          Este livro foi escrito para você se...
        </h2>
      </ScrollReveal>
      <div className="grid gap-5 sm:grid-cols-2">
        {items.map((item, i) => (
          <ScrollReveal key={i} delay={i * 0.06}>
            <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-5">
              <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
              <p className="font-body text-sm leading-relaxed text-foreground/85">{item}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ForWhoSection;
