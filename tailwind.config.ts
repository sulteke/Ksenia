import type { Config } from "tailwindcss";

/**
 * AURELIA — design system tokens.
 * A warm, editorial luxury palette. Light-only by intention: the brand's
 * emotional register is calm, sunlit and expensive, never dark or clinical.
 */
const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/content/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
      },
      screens: {
        "2xl": "1320px",
      },
    },
    extend: {
      colors: {
        // Warm neutrals — the canvas.
        warmwhite: "#FBF8F2",
        cream: "#F4EDDF",
        linen: "#EEE4D3",
        sand: "#E4D7BF",
        dune: "#D6C3A2",
        beige: "#C7B18C",
        // Accents.
        gold: "#B0894F", // primary — antique, muted gold (never yellow)
        "gold-soft": "#C6A672",
        "gold-tint": "#E7D6B8",
        olive: "#6C6D4A",
        "olive-deep": "#53542F",
        clay: "#7B6248",
        // Ink.
        brown: "#5A4530",
        espresso: "#332619", // body text
        ink: "#221A10", // deepest headings

        // Semantic aliases (so shadcn-style primitives read naturally).
        background: "#FBF8F2",
        foreground: "#332619",
        muted: "#EEE4D3",
        "muted-foreground": "#7B6248",
        border: "#E4D7BF",
        ring: "#B0894F",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": [
          "clamp(2.75rem, 7vw, 6.25rem)",
          { lineHeight: "0.98", letterSpacing: "-0.02em" },
        ],
        "display-xl": [
          "clamp(2.25rem, 5.5vw, 4.5rem)",
          { lineHeight: "1.02", letterSpacing: "-0.018em" },
        ],
        "display-lg": [
          "clamp(1.9rem, 4vw, 3.25rem)",
          { lineHeight: "1.06", letterSpacing: "-0.014em" },
        ],
        "display-md": [
          "clamp(1.6rem, 3vw, 2.4rem)",
          { lineHeight: "1.12", letterSpacing: "-0.01em" },
        ],
        overline: [
          "0.75rem",
          { lineHeight: "1", letterSpacing: "0.24em" },
        ],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
      },
      maxWidth: {
        prose: "68ch",
      },
      boxShadow: {
        soft: "0 2px 8px -2px rgba(51, 38, 25, 0.08), 0 12px 40px -12px rgba(51, 38, 25, 0.12)",
        lift: "0 8px 24px -6px rgba(51, 38, 25, 0.12), 0 28px 60px -18px rgba(51, 38, 25, 0.18)",
        glow: "0 0 0 1px rgba(176, 137, 79, 0.14), 0 24px 70px -24px rgba(176, 137, 79, 0.35)",
        inset: "inset 0 1px 0 0 rgba(255, 255, 255, 0.55)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "grain": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
      },
      transitionTimingFunction: {
        luxe: "cubic-bezier(0.22, 1, 0.36, 1)",
        "in-out-soft": "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--radix-accordion-content-height)", opacity: "1" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
          to: { height: "0", opacity: "0" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-22px) rotate(3deg)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.6" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.4s cubic-bezier(0.22,1,0.36,1)",
        "accordion-up": "accordion-up 0.35s cubic-bezier(0.22,1,0.36,1)",
        marquee: "marquee var(--marquee-duration, 40s) linear infinite",
        float: "float 7s ease-in-out infinite",
        "float-slow": "float-slow 11s ease-in-out infinite",
        shimmer: "shimmer 2.2s ease-in-out infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.22,1,0.36,1) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
