import authorPhoto from "@/assets/author-photo.png";
import ScrollReveal from "./ScrollReveal";
import { Instagram, Linkedin } from "lucide-react";

const AboutAuthorSection = () => (
  <section className="border-t border-border py-20">
    <div className="container">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <ScrollReveal>
          <div className="flex justify-center">
            <img
              src={authorPhoto}
              alt="Dra. Ana Paula Teixeira"
              className="w-72 rounded-2xl object-cover shadow-xl md:w-80 lg:w-96"
            />
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <div className="space-y-5">
            <span className="inline-block rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 font-body text-xs font-medium uppercase tracking-widest text-gold">
              Sobre a autora
            </span>
            <h2 className="text-3xl font-bold md:text-4xl">Dra. Ana Paula Teixeira</h2>
            <p className="font-body text-sm font-medium text-muted-foreground">
              Médica do Trabalho · Pesquisadora · Consultora
            </p>
            <p className="font-body text-base leading-relaxed text-muted-foreground">
              Com mais de 30 anos de experiência, a Dra. Ana Paula dedicou sua carreira a entender e transformar a relação entre trabalho e saúde mental. Reconhecida por sua expertise em saúde emocional nas organizações, é palestrante requisitada e consultora de empresas que buscam construir culturas organizacionais mais humanas e sustentáveis.
            </p>
            <blockquote className="border-l-2 border-gold pl-5 font-serif text-base italic leading-relaxed text-foreground/80">
              "Minha missão é capacitar indivíduos e organizações a reconhecerem os sinais, quebrarem o tabu e implementarem práticas que realmente façam a diferença."
            </blockquote>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default AboutAuthorSection;
