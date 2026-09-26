import bookCover from "@/assets/book-cover.png";
import ScrollReveal from "./ScrollReveal";
import { Star } from "lucide-react";

const AMAZON_URL = "https://amzn.to/4dPYuLI";
const REVIEWS_URL = "https://www.amazon.com.br/product-reviews/6598341957/?tag=quandootrabal-20";

const Rating = () => (
  <a
    href={REVIEWS_URL}
    target="_blank"
    rel="noopener noreferrer"
    data-no-checkout
    title="Ler as avaliações na Amazon"
    className="flex items-center gap-2 transition-opacity hover:opacity-80"
  >
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-gold text-gold" />
      ))}
    </div>
    <span className="font-body text-sm font-semibold text-foreground">5,0</span>
    <span className="font-body text-sm text-muted-foreground">· 25 avaliações<span className="hidden md:inline"> na Amazon</span></span>
  </a>
);

const HeroSectionRH = () => (
  <section className="py-10 md:py-24">
    <div className="container">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Text Column */}
        <ScrollReveal>
          <div className="space-y-5 md:space-y-6">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Para RH e liderança
            </p>
            <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-5xl">
              O adoecimento no trabalho começa muito antes do primeiro atestado.
            </h1>
            <p className="max-w-lg font-body text-base leading-relaxed text-muted-foreground md:text-lg">
              Histórias reais de quem adoeceu no trabalho mostram onde o desgaste começa: na
              sobrecarga, no papel que ninguém definiu, no gestor que desacredita a equipe. Um livro
              para quem lidera ou atua no RH e quer enxergar esses sinais antes do afastamento.
            </p>

            <p className="max-w-lg border-l-2 border-gold pl-4 font-body text-sm leading-relaxed text-foreground/80">
              Desde 26 de maio de 2026, a fiscalização da NR-1 pode autuar empresas que deixam os
              riscos psicossociais fora do PGR.
            </p>

            {/* Mobile: capa pequena + prova, visíveis na primeira tela */}
            <div className="flex items-center gap-4 md:hidden">
              <img
                src={bookCover}
                alt="Capa do livro Quando o Trabalho Dói"
                className="w-20 rounded-sm shadow-lg"
              />
              <div className="space-y-1.5">
                <p className="font-serif text-base font-bold leading-snug">Quando o Trabalho Dói</p>
                <p className="font-body text-xs text-muted-foreground">
                  Dra. Ana Paula Teixeira, médica do trabalho há mais de 30 anos
                </p>
                <Rating />
              </div>
            </div>

            <div className="hidden md:block">
              <p className="font-body text-sm font-medium text-foreground/70">
                Quando o Trabalho Dói · Dra. Ana Paula Teixeira, médica do trabalho há mais de 30 anos
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href={AMAZON_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-gold px-7 py-3.5 font-body text-sm font-semibold text-primary-foreground transition-colors hover:bg-gold-hover"
              >
                Comprar na Amazon · R$ 89,00
              </a>
              <a
                href="#amostra"
                className="inline-flex items-center justify-center rounded-lg border border-foreground/20 px-7 py-3.5 font-body text-sm font-semibold text-foreground transition-colors hover:bg-foreground/5"
              >
                Ler as primeiras páginas
              </a>
            </div>
            <p className="font-body text-xs text-muted-foreground">
              Livro impresso · 300 páginas · Editora AssedioNet
            </p>
          </div>
        </ScrollReveal>

        {/* Book Column (desktop) */}
        <ScrollReveal delay={0.2}>
          <div className="hidden flex-col items-center md:flex">
            <img
              src={bookCover}
              alt="Capa do livro Quando o Trabalho Dói"
              className="w-72 rounded-sm drop-shadow-2xl lg:w-80"
              style={{ transform: "rotate(2deg)" }}
            />
            <div className="mt-6">
              <Rating />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default HeroSectionRH;
