import ScrollReveal from "./ScrollReveal";

const outlets = ["Let's Go", "Tribuna da Bahia", "Bahia Econômica"];

const PressSection = () => (
  <section className="bg-surface-dark py-16">
    <div className="container text-center">
      <ScrollReveal>
        <p className="mb-8 font-body text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/50">
          Na imprensa
        </p>
        <div className="mb-8 flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {outlets.map((name) => (
            <span
              key={name}
              className="font-serif text-xl font-semibold text-primary-foreground/70 md:text-2xl"
            >
              {name}
            </span>
          ))}
        </div>
        <p className="mx-auto max-w-xl font-body text-sm leading-relaxed text-primary-foreground/50">
          A Dra. Ana Paula Teixeira é referência nacional em saúde mental no trabalho, com presença regular nos principais veículos de comunicação da Bahia.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default PressSection;
