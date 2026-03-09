import ScrollReveal from "./ScrollReveal";

const AboutBookSection = () => (
  <section id="sobre-o-livro" className="border-t border-border py-20">
    <div className="container max-w-3xl text-center">
      <ScrollReveal>
        <h2 className="mb-8 text-3xl font-semibold md:text-4xl">
          Mais do que um diagnóstico — um caminho.
        </h2>
        <p className="mb-6 font-body text-base leading-relaxed text-muted-foreground md:text-lg">
          Baseado em mais de 30 anos de experiência clínica e atuação corporativa,{" "}
          <em>Quando o Trabalho Dói</em> vai além da descrição dos sintomas. Oferece uma análise madura e sensível sobre como o adoecimento profissional se instala de maneira silenciosa — e apresenta ferramentas reais para a construção de uma cultura organizacional mais humana e produtiva.
        </p>
        <p className="font-body text-sm italic text-muted-foreground/70">
          Publicado pela Editora AssedioNet.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default AboutBookSection;
