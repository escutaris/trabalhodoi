import ScrollReveal from "./ScrollReveal";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ástoni Gouveia",
    title: "Uma Reflexão Necessária Sobre o Adoecimento Ocupacional",
    text: "O livro vai além da simples descrição de sintomas. Oferece uma análise madura e sensível sobre como o adoecimento profissional se instala de maneira silenciosa. O livro é extremamente rico e já recomendei para algumas pessoas próximas.",
  },
  {
    name: "Roseli Oliveira Reis",
    title: "Quando o trabalho dói, precisamos nos movimentar e fazer a mudança acontecer.",
    text: "Super recomendo. Esse livro nos remete a muitas realidades e traz uma reflexão importante e profunda sobre nosso papel como indivíduo e como líder — a importância do cuidado genuíno.",
  },
  {
    name: "Daniela Facchinetti",
    title: "Livro maravilhoso",
    text: "Escrito por uma profissional muito competente e sensível. Indico a todos que queiram olhar para suas vidas, refletir sobre as dores do trabalho, e também aos que atuam numa área que possibilite ajudar aos colaboradores de uma organização.",
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
      <div className="grid gap-8 md:grid-cols-3">
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
    </div>
  </section>
);

export default TestimonialsSection;
