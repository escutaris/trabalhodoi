import ScrollReveal from "./ScrollReveal";

const endorsements = [
  {
    name: "Tábata Lopes",
    role: "Farmacêutica, LinkedIn Top Voice, TEDx Speaker e mentora de liderança",
    text: "Com clareza e sabedoria, esta obra é indispensável para quem quer compreender e gerenciar riscos psicossociais no trabalho. Traz uma abordagem prática e aponta caminhos viáveis para ambientes organizacionais mais saudáveis.",
  },
  {
    name: "Enildes Lagos",
    role: "Economista e Head de Gestão de Pessoas",
    text: "Este livro nos convida a estender a mão a quem, muitas vezes em silêncio, enfrenta a escuridão. Com sensibilidade, transforma vivências em caminhos de cuidado e segurança psicológica.",
  },
  {
    name: "Gustavo Guimarães",
    role: "Médico do trabalho e empreendedor",
    text: "A autora dá voz aos trabalhadores em sofrimento revelando o que ocorre em empresas que se mostram perfeitas na mídia, todavia registram elevados índices de presenteísmo, redução da produtividade e lucratividade.",
  },
];

const ProTestimonialsSection = () => (
  <section className="border-t border-border py-20">
    <div className="container">
      <ScrollReveal>
        <h2 className="mb-14 text-center text-3xl font-semibold md:text-4xl">
          Quem trabalha com gente recomenda
        </h2>
      </ScrollReveal>
      <div className="grid gap-8 md:grid-cols-3">
        {endorsements.map((e, i) => (
          <ScrollReveal key={e.name} delay={i * 0.1}>
            <figure className="flex h-full flex-col border-l-2 border-gold pl-6">
              <blockquote className="mb-5 flex-1 font-body text-sm leading-relaxed text-foreground/85 md:text-base">
                “{e.text}”
              </blockquote>
              <figcaption>
                <p className="font-body text-sm font-semibold text-foreground">{e.name}</p>
                <p className="font-body text-xs text-muted-foreground">{e.role}</p>
              </figcaption>
            </figure>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProTestimonialsSection;
