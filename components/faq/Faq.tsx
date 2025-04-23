import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Heading from "@/components/ui/heading";
import Animation from "@/components/animation/Animation";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  heading?: string;
  items?: FaqItem[];
  badge?: string;
}

const Faq = ({
  badge = "Esclarecemos suas Dúvidas",
  items = [
    {
      question: "Quem precisa declarar o imposto de renda no Canadá?",
      answer:
        "Todos os residentes fiscais do Canadá devem declarar sua renda, independentemente de onde ela é gerada. Se você for residente, precisará declarar seus rendimentos globais.",
    },
    {
      question: "Qual é o prazo para declarar o imposto de renda no Canadá?",
      answer:
        "A data limite para enviar a declaração de imposto de renda é 30 de abril do ano seguinte ao ano fiscal (que vai de 1º de janeiro a 31 de dezembro).  Se você for autônomo (trabalhador independente), o prazo é estendido até 15 de junho, mas qualquer saldo devido precisa ser pago até 30 de abril.",
    },
    {
      question:
        "Quais documentos eu preciso para declarar meu imposto de renda?",
      answer:
        "Os principais documentos incluem o T4 (informações sobre os rendimentos de emprego), T5 (renda de investimentos), e outros formulários específicos dependendo da sua situação fiscal (como T3 para fundos de investimento, ou T2202 para estudantes).",
    },
    {
      question: "Quais são as faixas de imposto de renda no Canadá?",
      answer:
        "O Canadá tem um sistema de imposto progressivo, com faixas de imposto que variam conforme o nível de renda. Os impostos são cobrados tanto pelo governo federal quanto pelos governos provinciais e territoriais.",
    },
    {
      question: "É possível deduzir despesas ao declarar o imposto de renda?",
      answer:
        "Sim, várias despesas podem ser deduzidas, como despesas com cuidados infantis, despesas de trabalho (no caso de trabalhadores autônomos), contribuições para o RRSP (Plano de Poupança para Aposentadoria Registrado), entre outras.",
    },
    {
      question: `Como funciona o "RRSP" no Canadá?`,
      answer:
        "O RRSP (Registered Retirement Savings Plan) é uma conta de poupança que permite que os canadenses contribuam para sua aposentadoria de forma tributária vantajosa. As contribuições ao RRSP são dedutíveis, reduzindo a quantidade de imposto a ser paga no ano em que foram feitas.",
    },
    {
      question: `O que é o "Tax Free Savings Account" (TFSA)?`,
      answer:
        "O TFSA é uma conta de poupança onde os investimentos crescem livres de impostos. As contribuições não são dedutíveis do imposto de renda, mas os rendimentos (juros, dividendos, ganhos de capital) são isentos de impostos quando retirados.",
    },
    {
      question: "Como o FHSA afeta minha declaração de impostos?",
      answer:
        "As contribuições para o FHSA são dedutíveis do imposto de renda, o que reduz sua carga tributária no ano da contribuição. Além disso, os ganhos dentro do FHSA (como juros e dividendos) não são tributados. Quando você retirar os fundos para a compra de sua primeira casa, a retirada também será isenta de impostos, desde que cumpra os requisitos.",
    },
    {
      question: `O que é o "GST/HST Credit"?`,
      answer:
        "O GST/HST Credit é um benefício pago a pessoas de baixa a moderada renda para compensar parte do custo do GST (Imposto sobre Bens e Serviços) ou HST (Harmonized Sales Tax) que pagam sobre bens e serviços no Canadá.",
    },
    {
      question: "Posso receber um reembolso?",
      answer:
        "Sim, se o imposto que foi retido durante o ano for maior do que o imposto devido, você pode ter direito a um reembolso.",
    },
    {
      question: "O que acontece se eu perder o prazo de envio da declaração?",
      answer:
        "Se você perder o prazo, poderá ser cobrada uma multa de atraso. Além disso, se houver imposto a pagar, você também terá que pagar juros sobre o valor devido.",
    },
  ],
}: FaqProps) => {
  return (
    <section id="faq" className="pt-24 lg:pt-48">
      <div className="container lg:max-w-3xl lg:mx-auto grid gap-16">
        <Heading
          level={1}
          badge={badge}
          description="Respostas para as perguntas mais comuns sobre o
          imposto de renda no Canadá. Nosso objetivo é esclarecer suas dúvidas e
          ajudá-lo a entender melhor suas obrigações fiscais.
"
        >
          <span className="text-accent">Perguntas</span> Frequentes
        </Heading>
        <Animation delay={0.7}>
          <Accordion type="single" collapsible>
            {items.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="font-normal hover:no-underline lg:text-2xl lg:py-8 cursor-pointer">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-accent lg:text-lg">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Animation>
      </div>
    </section>
  );
};

export { Faq };
