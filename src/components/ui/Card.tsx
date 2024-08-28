import { forwardRef, HTMLAttributes } from "react";
import { cn } from "~/lib/utils";

// background: linear-gradient(138.97deg, #111214 5.16%, #121212 105.18%);

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "bg-card rounded-lg border border-border bg-gradient-to-br from-5% from-[#111214] to-[#121212] to-[105%] shadow-md",
        className,
      )}
      {...props}
    />
  ),
);
Card.displayName = "Card";

export { Card };
