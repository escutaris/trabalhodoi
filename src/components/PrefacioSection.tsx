import ScrollReveal from "./ScrollReveal";

const PrefacioSection = () => (
  <section className="bg-surface-testimonial py-16 md:py-20">
    <div className="container max-w-3xl text-center">
      <ScrollReveal>
        <p className="mb-6 font-body text-xs font-semibold uppercase tracking-[0.18em] text-gold">
          Do prefácio
        </p>
        <p className="mb-6 font-serif text-2xl font-semibold leading-snug md:text-4xl">
          “Estamos diante de um manual de conscientização e ação.”
        </p>
        <p className="mx-auto mb-8 max-w-2xl font-body text-base italic leading-relaxed text-muted-foreground md:text-lg">
          “Ana Paula defende que tudo começa por um diagnóstico preciso: entender quais são os
          fatores latentes que corroem o bem-estar e que, uma vez identificados, podem (e devem!)
          ser geridos.”
        </p>
        <p className="font-body text-sm font-semibold text-foreground">Fernando Akio Mariya</p>
        <p className="font-body text-xs text-muted-foreground">Médico do trabalho, autor do prefácio</p>
      </ScrollReveal>
    </div>
  </section>
);

export default PrefacioSection;
