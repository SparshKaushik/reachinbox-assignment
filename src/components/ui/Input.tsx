import * as React from "react";

import { cn } from "~/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, children, type, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex h-10 w-full items-center gap-1 rounded-md border border-border bg-background px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
      >
        {children}
        <input
          type={type}
          className="bg-transparent outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-border disabled:cursor-not-allowed disabled:opacity-50"
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
