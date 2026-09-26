import { useEffect, useState } from "react";

const AMAZON_URL = "https://amzn.to/4dPYuLI";

// Faixa de compra fixa no pé da tela, só no celular.
// Aparece depois que o botão do topo sai da tela e some perto do fechamento da página.
const StickyBuyBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const fromBottom = document.documentElement.scrollHeight - (window.scrollY + window.innerHeight);
      setVisible(window.scrollY > 650 && fromBottom > 700);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-foreground/10 bg-background/95 px-4 py-3 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] backdrop-blur transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <a
        href={AMAZON_URL}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={visible ? 0 : -1}
        className="flex w-full items-center justify-center rounded-lg bg-gold px-6 py-3.5 font-body text-sm font-semibold text-primary-foreground transition-colors hover:bg-gold-hover"
      >
        Comprar na Amazon · R$ 89,00
      </a>
    </div>
  );
};

export default StickyBuyBar;
