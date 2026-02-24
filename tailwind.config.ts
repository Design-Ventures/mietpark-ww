import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /*
       * ─── COLOR SYSTEM ───────────────────────────────────
       * Neutral base with a warm, professional accent.
       * Green signals availability/success (Geräte verfügbar).
       * Orange for warnings/pending states.
       */
      colors: {
        brand: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e", // Primary brand – signals "verfügbar"
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0a0a0a",
        },
        status: {
          available: "#22c55e",
          rented: "#3b82f6",
          pending: "#f59e0b",
          maintenance: "#ef4444",
          returned: "#8b5cf6",
        },
      },

      /*
       * ─── TYPOGRAPHY ─────────────────────────────────────
       * System font stack for speed. Clean, functional, no frills.
       */
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },

      fontSize: {
        "display-lg": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        "display": ["2.25rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "heading": ["1.5rem", { lineHeight: "1.25", letterSpacing: "-0.015em" }],
        "subheading": ["1.125rem", { lineHeight: "1.4", letterSpacing: "-0.01em" }],
        "body": ["1rem", { lineHeight: "1.6" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5" }],
        "caption": ["0.75rem", { lineHeight: "1.5" }],
      },

      /*
       * ─── SPACING & LAYOUT ──────────────────────────────
       * 4px base grid. Consistent rhythm.
       */
      spacing: {
        "4.5": "1.125rem",
        "13": "3.25rem",
        "15": "3.75rem",
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
      },

      borderRadius: {
        "sm": "0.25rem",
        "DEFAULT": "0.5rem",
        "md": "0.625rem",
        "lg": "0.75rem",
        "xl": "1rem",
        "2xl": "1.25rem",
      },

      /*
       * ─── SHADOWS ────────────────────────────────────────
       * Subtle, layered shadows for depth hierarchy.
       */
      boxShadow: {
        "xs": "0 1px 2px 0 rgb(0 0 0 / 0.03)",
        "sm": "0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.06)",
        "DEFAULT": "0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.05)",
        "md": "0 8px 16px -4px rgb(0 0 0 / 0.08), 0 4px 6px -2px rgb(0 0 0 / 0.04)",
        "lg": "0 20px 40px -8px rgb(0 0 0 / 0.1), 0 8px 16px -4px rgb(0 0 0 / 0.06)",
        "card": "0 1px 3px rgb(0 0 0 / 0.04), 0 4px 12px rgb(0 0 0 / 0.06)",
        "card-hover": "0 2px 8px rgb(0 0 0 / 0.06), 0 8px 24px rgb(0 0 0 / 0.1)",
      },

      /*
       * ─── ANIMATIONS ─────────────────────────────────────
       */
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-out",
        "slide-up": "slide-up 0.4s ease-out",
      },

      /*
       * ─── CONTAINER ──────────────────────────────────────
       */
      maxWidth: {
        "content": "72rem",   // 1152px – main content
        "narrow": "48rem",    // 768px – forms, text
        "wide": "90rem",      // 1440px – full layouts
      },
    },
  },
  plugins: [],
};

export default config;
