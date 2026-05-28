import ScrollReveal from "./ScrollReveal";

const outlets = [
  { name: "CartaCapital", description: "Burnout, desigualdade e adoecimento ocupacional — cobertura nacional sobre saúde mental no trabalho" },
  { name: "GloboNews", description: "Saúde mental nas empresas — o que muda com a nova regulamentação" },
  { name: "Rádio CBN", description: "Fatores psicossociais e NR-1 em vigor — entrevista técnica" },
  { name: "TV Aratu / TVE Bahia", description: "Síndrome do impostor, adoecimento silencioso e cultura organizacional" },
  { name: "CBN Salvador", description: "Redução de acidentes de trabalho e saúde emocional nas empresas" },
  { name: "TVE Bahia", description: "Saúde mental vira obrigação nas empresas brasileiras — o que a legislação exige e o que ainda falta nas práticas organizacionais." },
];

const PressSection = () => (
  <section className="bg-surface-dark py-16 md:py-24">
    <div className="container text-center">
      <ScrollReveal>
        <p className="mb-10 font-body text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/50">
          Na Imprensa
        </p>
        <div className="mx-auto mb-10 grid max-w-3xl gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
          {outlets.map(({ name, description }) => (
            <div key={name} className="space-y-1.5">
              <p className="font-serif text-lg font-semibold text-primary-foreground/80">{name}</p>
              <p className="font-body text-xs leading-relaxed text-primary-foreground/50">{description}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto max-w-2xl font-body text-sm leading-relaxed text-primary-foreground/50">
          A Dra. Ana Paula Teixeira é referência técnica na cobertura nacional e regional sobre saúde mental no trabalho, adoecimento ocupacional e os impactos da NR-1 nas organizações brasileiras.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default PressSection;
