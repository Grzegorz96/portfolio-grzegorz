import { MotionH2, MotionDiv } from "@/components/motion";
import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  const t = useTranslations("FAQ");

  const faqData = [
    {
      question: t("questions.q1.question"),
      answer: t("questions.q1.answer"),
    },
    {
      question: t("questions.q2.question"),
      answer: t("questions.q2.answer"),
    },
    {
      question: t("questions.q3.question"),
      answer: t("questions.q3.answer"),
    },
    {
      question: t("questions.q4.question"),
      answer: t("questions.q4.answer"),
    },
    {
      question: t("questions.q5.question"),
      answer: t("questions.q5.answer"),
    },
  ];

  return (
    <section
      id="faq"
      className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 border-1 border-amber-100"
    >
      {/* Background glow effect */}
      <div className="w-[300px] h-[500px] absolute top-[150px] left-1/2 -translate-x-1/2 origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[100px] z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-[540px] mb-16">
          <MotionH2
            className="from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 bg-gradient-to-r bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px] relative z-10 pb-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {t("title")}
          </MotionH2>

          <MotionDiv
            className="mt-5 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t("description")}
            </p>
          </MotionDiv>
        </div>

        {/* FAQ Items with Accordion components */}
        <div className="w-full max-w-[700px] mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((faq, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="w-full glass-effect border-primary/20 hover:border-primary/40 shadow-lg overflow-hidden rounded-xl outline-1 outline-border outline-offset-[-1px] border-b-0 last:border-b transition-all duration-500"
                >
                  <AccordionTrigger className="w-full px-6 py-5 pr-4 flex justify-between items-center gap-5 text-left transition-all duration-300 ease-out hover:no-underline cursor-pointer">
                    <div className="flex-1 text-foreground text-base font-medium leading-6 break-words">
                      {faq.question}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="overflow-hidden transition-all duration-500 ease-out">
                    <div className="px-6 pb-5 pt-2">
                      <div className="text-muted-foreground text-sm font-normal leading-6 break-words">
                        {faq.answer}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </MotionDiv>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
