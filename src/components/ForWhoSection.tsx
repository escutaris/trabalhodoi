import ScrollReveal from "./ScrollReveal";
import { Check } from "lucide-react";

const items = [
  "Você vê desgaste na equipe e não consegue apontar de onde ele vem",
  "Os afastamentos aumentaram e cada caso parece um problema individual",
  "Você atua no RH e precisa falar de saúde mental com gestores que só olham a meta",
  "Você lidera e quer entender o que, na sua forma de gerir, pesa sobre as pessoas",
  "Sua empresa está revendo o PGR por causa da NR-1 e você quer entender o que está por trás dos riscos psicossociais",
  "Você precisa de argumentos para levar o tema à diretoria",
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
            <div className="flex cursor-default items-start gap-3 rounded-lg border border-border bg-card p-5 transition-all duration-200 hover:-translate-y-1 hover:border-gold/40 hover:shadow-md active:scale-[0.98] active:shadow-sm">
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
