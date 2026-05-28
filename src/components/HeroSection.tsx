import bookCover from "@/assets/book-cover.png";
import ScrollReveal from "./ScrollReveal";
import { Star } from "lucide-react";

const HeroSection = () => (
  <section className="py-16 md:py-24">
    <div className="container">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Text Column */}
        <ScrollReveal>
          <div className="space-y-6">
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Quando o Trabalho Dói
            </h1>
            <p className="font-serif text-xl italic text-muted-foreground md:text-2xl">
              Do Adoecimento Silencioso à Cultura de Bem-Estar
            </p>
            <p className="font-body text-sm font-medium tracking-wide text-foreground/70">
              Dra. Ana Paula Teixeira — Médica do Trabalho · Especialista em Saúde Mental nas Organizações
            </p>
            <p className="max-w-lg font-body text-base leading-relaxed text-muted-foreground">
              Um guia essencial para líderes, gestores de RH e profissionais que desejam transformar o ambiente de trabalho em um espaço de crescimento, saúde e bem-estar.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://amzn.to/4dPYuLI"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg bg-gold px-7 py-3.5 font-body text-sm font-semibold text-primary-foreground transition-colors hover:bg-gold-hover"
              >
                Comprar na Amazon
              </a>
              <a
                href="#sobre-o-livro"
                className="inline-flex items-center rounded-lg border border-foreground/20 px-7 py-3.5 font-body text-sm font-semibold text-foreground transition-colors hover:bg-foreground/5"
              >
                Conhecer o livro
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Book Column */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-col items-center">
            <div className="relative">
              <img
                src={bookCover}
                alt="Capa do livro Quando o Trabalho Dói"
                className="w-64 rounded-sm drop-shadow-2xl md:w-72 lg:w-80"
                style={{ transform: "rotate(2deg)" }}
              />
            </div>
            <div className="mt-6 flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="mt-2 font-body text-xs text-muted-foreground">
              Avaliado na Amazon por leitores verificados
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default HeroSection;
