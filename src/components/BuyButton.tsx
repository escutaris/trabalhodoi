const AMAZON_URL = "https://amzn.to/4dPYuLI";

const BuyButton = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-col items-center gap-2 ${className}`}>
    <a
      href={AMAZON_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-lg bg-gold px-8 py-3.5 font-body text-sm font-semibold text-primary-foreground transition-colors hover:bg-gold-hover"
    >
      Comprar na Amazon · R$ 89,00
    </a>
    <p className="font-body text-xs text-muted-foreground">Livro impresso · 300 páginas</p>
  </div>
);

export default BuyButton;
