import ScrollReveal from "./ScrollReveal";
import BuyButton from "./BuyButton";
import { Star } from "lucide-react";

const REVIEWS_URL = "https://www.amazon.com.br/product-reviews/6598341957/?tag=quandootrabal-20";

// Trechos fiéis das avaliações na Amazon; cortes marcados com [...].
const testimonials = [
  {
    name: "Ástoni Gouveia",
    title: "Uma Reflexão Necessária Sobre o Adoecimento Ocupacional",
    text: "O livro vai além da simples descrição de sintomas ou da crítica às pressões corporativas [...]. Já no caso da Clara, a reflexão de que “muitas vezes a maior força está em reconhecer a própria vulnerabilidade e buscar o apoio de que precisamos” ecoou forte por aqui. Outro trecho que me atravessou profundamente foi a reflexão sobre o poder das palavras, na página 245.",
  },
  {
    name: "Renata Carretti de Queiroz",
    title: "Livro incrível!",
    text: "Esse [livro] é incrível, com casos reais que nos identificamos, com números estatísticos e muito bem fundamentado. [...] A abordagem da Dra. Ana Paulla é extremamente acolhedora.",
  },
  {
    name: "Patricia V. C. Quispe",
    title: "Leitura obrigatória!",
    text: "Um livro maravilhoso que nos acolhe a cada página, porque todos nós somos trabalhadores. A escritora entra em assuntos difíceis do mundo do trabalho e nos explica as emoções que envolvem as relações interpessoais entre trabalhadores e gestores.",
  },
];

const TestimonialsSection = () => (
  <section className="bg-surface-testimonial py-20">
    <div className="container">
      <ScrollReveal>
        <h2 className="mb-14 text-center text-3xl font-semibold md:text-4xl">
          O que os leitores dizem
        </h2>
      </ScrollReveal>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.name} delay={i * 0.1}>
            <div className="flex h-full flex-col rounded-xl border border-border bg-card p-7">
              <div className="mb-3 flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <h3 className="mb-2 font-serif text-base font-semibold leading-snug">{t.title}</h3>
              <p className="mb-5 flex-1 font-body text-sm leading-relaxed text-muted-foreground">
                "{t.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-body text-sm font-semibold text-foreground">{t.name}</p>
                <p className="font-body text-xs text-muted-foreground/70">
                  Compra verificada · Amazon Brasil
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
      <p className="mt-10 text-center">
        <a
          href={REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-no-checkout
          className="font-body text-sm font-semibold text-gold underline-offset-4 hover:underline"
        >
          Ler todas as 25 avaliações na Amazon ↗
        </a>
      </p>
      <BuyButton className="mt-8" />
    </div>
  </section>
);

export default TestimonialsSection;
