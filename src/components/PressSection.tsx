import ScrollReveal from "./ScrollReveal";

const outlets = [
  {
    name: "CartaCapital",
    description: "Mulheres ganham 21% menos e representam 60% dos casos de burnout no país",
    url: "https://www.cartacapital.com.br/do-micro-ao-macro/mulheres-ganham-21-menos-burnout-desigualdade/",
  },
  { name: "GloboNews", description: "Saúde mental nas empresas e o que muda com a nova regulamentação" },
  {
    name: "Rádio CBN Bahia",
    description: "Redução de acidentes de trabalho",
    url: "https://www.youtube.com/watch?v=f4KWwgZnyvI",
  },
  {
    name: "TV Aratu / TVE Bahia",
    description: "Síndrome do impostor: o quanto você valoriza as próprias conquistas",
    url: "https://www.youtube.com/watch?v=8-2xZy5eITY",
  },
  {
    name: "BNews",
    description: "Ansiedade e burnout disparam no Brasil, e a nova NR-1 obriga as empresas a agir",
    url: "https://www.bnews.com.br/amp/noticias/economia-e-mercado/crise-silenciosa-no-trabalho-ansiedade-e-burnout-disparam-no-brasil-e-nova-nr-1-obriga-empresas-agir.html",
  },
  {
    name: "NewsBA",
    description: "Nova NR-1 coloca saúde mental no centro da gestão empresarial",
    url: "https://newsba.com.br/2026/05/21/nova-nr-1-coloca-saude-mental-no-centro-da-gestao-empresarial/",
  },
];

const PressSection = () => (
  <section className="bg-surface-dark py-16 md:py-24">
    <div className="container text-center">
      <ScrollReveal>
        <p className="mb-10 font-body text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/50">
          Na Imprensa
        </p>
        <div className="mx-auto mb-10 grid max-w-3xl gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
          {outlets.map(({ name, description, url }) => {
            const content = (
              <>
                <p className="font-serif text-lg font-semibold text-primary-foreground/80">{name}</p>
                <p className="font-body text-xs leading-relaxed text-primary-foreground/50">{description}</p>
                {url && (
                  <p className="pt-1 font-body text-xs font-semibold text-gold">Ver a matéria ↗</p>
                )}
              </>
            );
            return url ? (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="block space-y-1.5 transition-opacity hover:opacity-80"
              >
                {content}
              </a>
            ) : (
              <div key={name} className="space-y-1.5">
                {content}
              </div>
            );
          })}
        </div>
        <p className="mx-auto max-w-2xl font-body text-sm leading-relaxed text-primary-foreground/50">
          A Dra. Ana Paula Teixeira é referência técnica na cobertura nacional e regional sobre saúde mental no trabalho, adoecimento ocupacional e os impactos da NR-1 nas organizações brasileiras.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default PressSection;
