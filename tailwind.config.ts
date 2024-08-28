import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
          border: "hsl(var(--muted-border))",
          lighter: "hsl(var(--muted-lighter))",
        },
        left: {
          bg: "hsl(var(--left-bg))",
          icon: {
            DEFAULT: "hsl(var(--left-icon))",
            active: "hsl(var(--left-icon-active))",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
