import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "~/lib/utils";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "default" | "ghost";
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, variant = "default", ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          "rounded-md px-9 py-4",
          {
            "to-[rgba(5, 36, 191, 0.99)] bg-gradient-to-br from-[#4B63DD] from-[-2.99%] to-[#0524BF] to-[95.8%]":
              variant === "default",
            "bg-transparent hover:bg-white/10 transition-colors": variant === "ghost",
          },
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };
