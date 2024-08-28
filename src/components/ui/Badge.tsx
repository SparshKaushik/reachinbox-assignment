import * as React from "react";

import { cn } from "~/lib/utils";

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "accent" | "success" | "purpled" | "warning";
};

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full bg-[#222426] px-2.5 py-0.5 text-xs font-semibold transition-colors",
        {
          "text-accent": variant === "accent",
          "text-[#57E0A6]": variant === "success",
          "text-[#9C62E6]": variant === "purpled",
          "text-[#E6D162]": variant === "warning",
        },
        className,
      )}
      {...props}
    />
  );
}

export type BadgeDotProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "accent" | "success" | "purpled" | "warning";
};

function BadgeDot({ className, variant = "accent", ...props }: BadgeDotProps) {
  return (
    <div
      className={cn(
        "size-2 rounded-full border",
        {
          "bg-accent border-[#323440]": variant === "accent",
          "border-[#2D3833] bg-[#57E0A6]": variant === "success",
          "border-[#352F3C] bg-[#9C62E6]": variant === "purpled",
          "border-[#444234] bg-[#E6D162]": variant === "warning",
        },
        className,
      )}
      {...props}
    />
  );
}

export { Badge, BadgeDot };
