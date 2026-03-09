import bookCover from "@/assets/book-cover.png";
import ScrollReveal from "./ScrollReveal";

const FinalCTA = () => (
  <section className="py-24">
    <div className="container text-center">
      <ScrollReveal>
        <h2 className="mb-3 text-3xl font-bold md:text-4xl">O trabalho não precisa doer.</h2>
        <p className="mb-10 font-body text-lg text-muted-foreground">Comece por aqui.</p>
        <img
          src={bookCover}
          alt="Capa do livro"
          className="mx-auto mb-10 w-40 drop-shadow-xl"
        />
        <a
          href="https://amzn.to/46Koplt"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-lg bg-gold px-10 py-4 font-body text-base font-semibold text-primary-foreground transition-colors hover:bg-gold-hover"
        >
          Comprar na Amazon
        </a>
        <p className="mt-5 font-body text-xs text-muted-foreground">
          Disponível em versão física e digital · Editora AssedioNet
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default FinalCTA;
