import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface AccordionElementProps {
  index: number;
  faq: {
    question: string;
    answer: string;
  };
}

export function AccordionElement({ index, faq }: AccordionElementProps) {
  return (
    <AccordionItem
      key={index}
      value={`item-${index}`}
      className="w-full bg-card/50 backdrop-blur-sm shadow-lg overflow-hidden rounded-xl border border-border transition-all duration-500 ease-out cursor-pointer hover:bg-card"
    >
      <AccordionTrigger className="w-full px-5 py-[18px] pr-4 flex justify-between items-center gap-5 text-left transition-all duration-300 ease-out hover:no-underline cursor-pointer">
        <div className="flex-1 text-foreground text-base font-medium leading-6 break-words">
          {faq.question}
        </div>
      </AccordionTrigger>
      <AccordionContent className="overflow-hidden transition-all duration-500 ease-out">
        <div className="px-5 pb-[18px] pt-2">
          <div className="text-foreground/80 text-sm font-normal leading-6 break-words">
            {faq.answer}
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
