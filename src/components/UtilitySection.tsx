import ScrollReveal from "./ScrollReveal";
import { Check } from "lucide-react";

const items = [
  "Reconhecer sinais de desgaste que a empresa costuma tratar como problema individual de quem adoeceu.",
  "Ligar o sofrimento à forma como o trabalho é organizado: sobrecarga, comunicação e práticas de gestão.",
  "Levar o tema à diretoria com argumentos e com os casos que o livro apresenta.",
];

const UtilitySection = () => (
  <section className="bg-surface-testimonial py-16 md:py-20">
    <div className="container max-w-3xl">
      <ScrollReveal>
        <p className="mb-3 text-center font-body text-xs font-semibold uppercase tracking-[0.18em] text-gold">
          Para quem lidera ou atua no RH
        </p>
        <h2 className="mb-10 text-center text-3xl font-semibold md:text-4xl">Para que serve esta leitura</h2>
      </ScrollReveal>
      <div className="space-y-4">
        {items.map((item, i) => (
          <ScrollReveal key={i} delay={i * 0.08}>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-5 md:p-6">
              <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
              <p className="font-body text-base leading-relaxed text-foreground/85">{item}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default UtilitySection;
