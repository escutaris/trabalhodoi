import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import BuyButton from "./BuyButton";

// Trecho transcrito das páginas 11 a 13 do livro impresso, sem edição.
const pages: { number: number; paragraphs: React.ReactNode[] }[] = [
  {
    number: 11,
    paragraphs: [
      <>
        <span className="excerpt-dropcap">E</span>mbora muitas empresas ostentem uma imagem de sucesso e
        felicidade em seus portais, campanhas publicitárias, nas redes sociais e nos relatórios de
        sustentabilidade e estejam listadas entre as melhores e maiores, a realidade costuma contar uma
        história diferente.
      </>,
      <>
        No ambiente de trabalho, existem elementos determinantes, muitas vezes invisíveis aos olhos dos
        acionistas controladores e de alguns gestores-chaves, que são cruciais para a qualidade dos
        resultados obtidos e, tão importante quanto, para a saúde mental dos trabalhadores. Estes
        elementos, que chamo de “impactos invisíveis”, também conhecidos como fatores latentes ou
        estressores subliminares, embora sejam decisivos no meio laboral, são frequentemente ignorados.
      </>,
      <>
        Olhando-se para diferentes organizações, de um modo geral é possível observar que relações
        funcionais favorecem subculturas que promovem o desenvolvimento individual e coletivo. Em
        contrapartida, relações disfuncionais podem deteriorar significativamente a qualidade de vida no
        ambiente de trabalho, com prejuízos abrangentes tanto para os trabalhadores quanto para a própria
        empresa.
      </>,
    ],
  },
  {
    number: 12,
    paragraphs: [
      <>
        Um agravante para essa situação é que muitas empresas e indivíduos não reconhecem totalmente esses
        elementos de risco no trabalho, permitindo assim que eles contribuam para níveis crônicos de
        estresse, para o desengajamento e para a insatisfação no ambiente laboral. Muitos ainda falham em
        admiti-los e, assim, sucumbem sobre a sua repercussão negativa, como o fraco desempenho geral, o
        crescimento das ausências, dos acidentes e crescente <em>turnover</em> voluntário<sup>1</sup>.
      </>,
      <>
        É importante compreender que tudo em um ambiente de trabalho gira em torno das relações
        interpessoais que ali acontecem no dia a dia e que os impactos invisíveis possuem um poder imenso
        sobre elas. Esses fatores, como a má gestão de mudanças organizacionais, precariedade laboral,
        comunicação ineficaz, assédio, exigências contraditórias, falta de clareza na definição das
        funções, cargas excessivas de trabalho dentre outros, são como o lado oculto destas “empresas
        instagramáveis” – aquelas que se preocupam muito em produzir espaços visualmente agradáveis e
        bonitos esteticamente, mas não investem efetivamente na essência das relações. Com isso, ao invés
        de terem em vista o fomento de um ótimo clima organizacional, o que vemos é, por fora, um trabalho
        de marketing e propaganda admirável, mas que, na essência, mantém uma cultura “tóxica”
        <sup>2</sup> por detrás dele.
      </>,
    ],
  },
  {
    number: 13,
    paragraphs: [
      <>
        Tais empresas, portanto, aparentam sucesso e felicidade, mas escondem a realidade de um ambiente de
        trabalho que coloca em risco a saúde física e mental dos seus trabalhadores. Esse contraste cria um
        cenário onde o brilho nos olhos dessas pessoas se desvanece e os resultados da empresa, embora
        aparentemente positivos, carregam um custo alto demais.
      </>,
      <>
        Em contrapartida, o trabalho, em sua essência, deveria ser uma fonte de sentido e realização para
        os seres humanos. Como bem explorou Mario Sérgio Cortella em sua obra “Por que fazemos o que
        fazemos?”<sup>3</sup>, o trabalho deveria transcender a mera obrigação e passar a ser um meio de
        realização pessoal e contribuição para uma vida com significado. Porém, ao experimentar formas
        disfuncionais de como relações de poder se estabelecem, conflitos de interesse entre a empresa e
        seus trabalhadores naturalmente emergem e, havendo descuido com o elemento humano no ambiente
        laboral, poderá levar frequentemente ao sofrimento no trabalho - uma realidade parcialmente deixada
        de lado no mundo corporativo.
      </>,
    ],
  },
];

const notes = [
  "HALF, Robert. Turnover em alta: principais motivos e como evitar. Robert Half, 4 ago. 2022.",
  "Dr. Peter J. Frost contribuiu na popularização do conceito da “Cultura Tóxica nas Organizações”, através de seu livro “Toxic Emotions at Work: How Compassionate Managers Handle Pain and Conflict” (Harvard Business School Pr; American First edition, 2003).",
  "CORTELLA, Mario Sérgio. Por que fazemos o que fazemos? 1. ed. São Paulo: Planeta, 2016.",
];

const ExcerptSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="amostra" className="border-t border-border py-16 md:py-24">
      <div className="container max-w-3xl">
        <ScrollReveal>
          <p className="mb-3 text-center font-body text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            Amostra
          </p>
          <h2 className="mb-3 text-center text-3xl font-semibold md:text-4xl">Leia as primeiras páginas</h2>
          <p className="mx-auto mb-10 max-w-xl text-center font-body text-base leading-relaxed text-muted-foreground">
            O começo do capítulo 1, como está impresso no livro.
          </p>
        </ScrollReveal>

        <div className="relative">
          <article
            lang="pt-BR"
            className={`excerpt-page relative overflow-hidden rounded-sm px-6 py-9 shadow-[0_2px_24px_rgba(0,0,0,0.08)] md:px-14 md:py-14 ${
              open ? "" : "max-h-[560px] md:max-h-[640px]"
            }`}
          >
            <p className="mb-1 text-center font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/50">
              Capítulo 1
            </p>
            <h3 className="mb-8 text-center font-serif text-xl font-bold uppercase leading-snug tracking-wide md:text-2xl">
              O verdadeiro sucesso, por trás das aparências
            </h3>

            {pages.map((page) => (
              <div key={page.number}>
                {page.paragraphs.map((p, i) => (
                  <p key={i} className="excerpt-text">
                    {p}
                  </p>
                ))}
                <p className="my-6 text-center font-body text-[11px] tabular-nums text-foreground/40">
                  {page.number}
                </p>
              </div>
            ))}

            <ol className="mt-2 space-y-1.5 border-t border-foreground/15 pt-4 font-body text-[11px] leading-relaxed text-foreground/55">
              {notes.map((n, i) => (
                <li key={i}>
                  <sup>{i + 1}</sup> {n}
                </li>
              ))}
            </ol>

            {!open && (
              <div className="excerpt-fade pointer-events-none absolute inset-x-0 bottom-0 h-40" />
            )}
          </article>

          {!open && (
            <div className="absolute inset-x-0 bottom-6 flex justify-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="rounded-lg border border-foreground/20 bg-background px-7 py-3 font-body text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-foreground/5"
              >
                Continuar lendo
              </button>
            </div>
          )}
        </div>

        {open && (
          <p className="mt-8 text-center font-body text-sm text-muted-foreground">
            O capítulo continua na página 14.
          </p>
        )}

        <BuyButton className="mt-8" />
      </div>
    </section>
  );
};

export default ExcerptSection;
