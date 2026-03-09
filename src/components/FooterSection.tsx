import { Instagram, Linkedin } from "lucide-react";

const FooterSection = () => (
  <footer className="border-t border-border py-10">
    <div className="container flex flex-col items-center text-center">
      <div className="mb-4 flex gap-4">
        <a
          href="https://www.instagram.com/draanapaulateixeira/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground transition-colors hover:text-gold"
        >
          <Instagram size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/draanapaulateixeira/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground transition-colors hover:text-gold"
        >
          <Linkedin size={24} />
        </a>
      </div>
      <p className="font-body text-sm font-medium text-foreground">Dra. Ana Paula Teixeira</p>
      <p className="mt-1 font-body text-xs text-muted-foreground">
        © 2026 · Todos os direitos reservados
      </p>
      <a
        href="https://pixel-perfect-clone-5596.lovable.app"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block font-body text-sm font-medium text-gold underline underline-offset-4 transition-colors hover:text-gold-hover"
      >
        Conheça também o Guia "Quando Ela Fala, Todo Mundo Ouve"
      </a>
    </div>
  </footer>
);

export default FooterSection;
