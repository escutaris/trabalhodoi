import ScrollReveal from "./ScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "O livro é técnico demais para quem não é da área da saúde?",
    a: "Não. A Dra. Ana Paula escreve para gestores e profissionais de RH. Os conceitos de saúde ocupacional aparecem explicados a partir das histórias de trabalhadores que adoeceram.",
  },
  {
    q: "Serve para quem lidera, mas não trabalha no RH?",
    a: "Sim. Boa parte do livro trata da forma de gerir: metas, cobrança, papéis mal definidos, o jeito de conduzir a equipe. É onde o líder tem mais poder de mudar as coisas.",
  },
  {
    q: "Tem exercícios, testes ou checklists?",
    a: "Não. É um livro de reflexão e embasamento, com histórias reais, a análise das causas do adoecimento e propostas de gestão para discutir na sua organização.",
  },
  {
    q: "O livro ensina a cumprir a NR-1?",
    a: "Não é um manual da norma. O livro mostra o que está por trás dos riscos psicossociais que as empresas precisam incluir no PGR desde a atualização da NR-1, e por que o diagnóstico correto vem antes de qualquer ação. A adequação de cada empresa pede um processo técnico próprio.",
  },
  {
    q: "Existe versão digital?",
    a: "Não. O livro existe só na versão impressa, com 300 páginas.",
  },
  {
    q: "Como funcionam entrega e frete?",
    a: "A compra é feita na Amazon. Prazo, frete e formas de pagamento aparecem lá, de acordo com o seu CEP.",
  },
];

const FaqSection = () => (
  <section className="border-t border-border py-16 md:py-24">
    <div className="container max-w-3xl">
      <ScrollReveal>
        <h2 className="mb-8 text-center text-3xl font-semibold md:mb-12 md:text-4xl">
          Perguntas frequentes
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map(({ q, a }, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left font-body text-base font-semibold">{q}</AccordionTrigger>
              <AccordionContent className="font-body text-sm leading-relaxed text-muted-foreground">
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ScrollReveal>
    </div>
  </section>
);

export default FaqSection;
