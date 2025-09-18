import { MotionDiv } from "@/components/motion";

interface ServiceItemProps {
  icon: React.ReactNode;
  secondaryIcon?: React.ReactNode;
  title: string;
  description: string;
}

export function ServiceItem({
  icon,
  secondaryIcon,
  title,
  description,
}: ServiceItemProps) {
  return (
    <div className="flex flex-col group">
      <div className="flex items-center gap-3 mb-3">
        <MotionDiv
          className="text-primary bg-primary/10 p-3 rounded-lg transition-colors duration-300 group-hover:bg-primary/20 relative"
          whileHover={{
            rotate: [0, -10, 10, -5, 0],
            transition: { duration: 0.5 },
          }}
        >
          {icon}
          {secondaryIcon}
        </MotionDiv>
        <h3 className="text-xl font-medium text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed pl-12">
        {description}
      </p>
    </div>
  );
}
