import React, { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

interface HeadingProps extends PropsWithChildren {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  as?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

const Heading = ({
  level = 2,
  as,
  children,
  className,
  ...props
}: HeadingProps) => {
  const HeadingTag = `h${as || level}`;

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
    <div className={cn(defaultClassNames[level], className)} {...props}>
      {children}
    </div>
  );
};

export { Heading };
export default Heading;
