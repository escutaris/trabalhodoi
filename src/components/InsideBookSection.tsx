import ScrollReveal from "./ScrollReveal";
import BuyButton from "./BuyButton";
import { Check } from "lucide-react";
import logoAssedionet from "@/assets/logo-assedionet.webp";

const learnings = [
  "Seis histórias de quem adoeceu no trabalho, como a de Mônica, profissional exemplar que se viu desacreditada depois da chegada de um novo gestor.",
  "O que a empresa “instagramável” esconde: assédio moral velado, sobrecarga, papéis confusos e exigências que se contradizem.",
  "Os sinais de desgaste que aparecem na equipe muito antes do atestado, e como reconhecê-los cedo.",
  "Por que o modelo taylorista ainda pesa na gestão, e o que muda quando a liderança sai da rigidez.",
  "Como fazer o diagnóstico correto dos fatores psicossociais, o primeiro passo para gerir o risco.",
  "Propostas de gestão que conciliam metas de produtividade com cuidado de verdade com as pessoas.",
];

const chapters = [
  ["O verdadeiro sucesso, por trás das aparências", "11"],
  ["A (Im)Perfeição Corporativa", "23"],
  ["Alerta Vermelho: como anda o seu bem-estar?", "51"],
  ["Entre a rigidez e a inovação: os dilemas da gestão moderna", "83"],
  ["Uma Revolução Silenciosa", "113"],
  ["Tudo começa com o diagnóstico correto", "209"],
  ["Transforme sua organização em um ambiente de trabalho colaborativo e gratificante", "241"],
  ["Estamos evoluindo no sentido de melhorar o ambiente e as condições de trabalho", "253"],
];

const InsideBookSection = () => (
  <section id="sobre-o-livro" className="border-t border-border py-20">
    <div className="container max-w-5xl">
      <ScrollReveal>
        <h2 className="mb-4 text-center text-3xl font-semibold md:text-4xl">
          O que você encontra nas 300 páginas
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center font-body text-base leading-relaxed text-muted-foreground">
          Histórias reais, os sinais que a empresa costuma ignorar e o caminho para agir sobre as
          causas.
        </p>
      </ScrollReveal>

      <div className="grid gap-10 md:grid-cols-5 md:gap-12">
        <div className="space-y-4 md:col-span-3">
          {learnings.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                <p className="font-body text-sm leading-relaxed text-foreground/85 md:text-base">
                  {item}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="md:col-span-2">
          <ScrollReveal delay={0.15}>
            <div className="rounded-xl border border-border bg-card p-6">
              <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                Sumário
              </p>
              <ol className="space-y-3">
                {chapters.map(([title, page]) => (
                  <li key={page} className="flex items-baseline gap-3 font-body text-sm">
                    <span className="flex-1 leading-snug text-foreground/85">{title}</span>
                    <span className="text-xs tabular-nums text-muted-foreground">{page}</span>
                  </li>
                ))}
              </ol>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <BuyButton className="mt-12" />

      <div className="mt-10 flex items-center justify-center gap-3">
        <span className="font-body text-xs text-muted-foreground/70">Publicado pela</span>
        <a href="https://assed.io" target="_blank" rel="noopener noreferrer">
          <img
            src={logoAssedionet}
            alt="Assédio.net Editora"
            className="h-7 opacity-50 transition-opacity hover:opacity-80"
          />
        </a>
      </div>
    </div>
  </section>
);

export default InsideBookSection;
