import React, { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import Animation from "@/components/animation/Animation";

interface HeadingProps extends PropsWithChildren {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  as?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  badge?: string;
  description?: string;
}

const Heading = ({
  level = 2,
  children,
  className,
  badge,
  description,
  ...props
}: HeadingProps) => {
  // Define default class names based on heading level
  const defaultClassNames = {
    1: "max-w-2xl text-3xl font-semibold md:text-4xl lg:text-6xl",
    2: "text-2xl font-semibold md:text-3xl",
    3: "text-xl font-semibold",
    4: "text-lg font-medium",
    5: "text-base font-medium",
    6: "text-sm font-medium",
  };

  return (
    <div className="flex flex-col items-center gap-4 text-center max-w-3xl mx-auto">
      {badge && (
        <Animation className=" h-auto">
          <Badge variant="outline">{badge}</Badge>
        </Animation>
      )}
      <div className={cn(defaultClassNames[level], className)} {...props}>
        <Animation delay={0.25} isHidden>
          {children}
        </Animation>
      </div>

      {description && (
        <Animation className="min-h-fit" delay={0.5} isHidden>
          <p className="text-muted-foreground lg:text-lg lg:pt-4">
            {description}
          </p>
        </Animation>
      )}
    </div>
  );
};

export { Heading };
export default Heading;
