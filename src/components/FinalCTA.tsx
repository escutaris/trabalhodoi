import bookCover from "@/assets/book-cover.png";
import logoAssedionet from "@/assets/logo-assedionet.webp";
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
          href="https://amzn.to/4dPYuLI"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-lg bg-gold px-10 py-4 font-body text-base font-semibold text-primary-foreground transition-colors hover:bg-gold-hover"
        >
          Comprar na Amazon
        </a>
        <p className="mt-5 font-body text-xs text-muted-foreground">
          Disponível em versão física e digital · Editora AssedioNet
        </p>
        <div className="mt-3 flex justify-center">
          <a href="https://assed.io" target="_blank" rel="noopener noreferrer">
            <img
              src={logoAssedionet}
              alt="Assédio.net Editora"
              className="h-5 opacity-60 transition-opacity hover:opacity-90"
            />
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default FinalCTA;
