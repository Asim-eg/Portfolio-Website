import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        border: "var(--border)",
        text: "var(--text)",
        muted: "var(--muted)",
        ember: "var(--ember)",
        emberhi: "var(--emberhi)",
        calm: "var(--calm)",
      },
      fontFamily: {
        display: ['"Kanit"', "Inter", "sans-serif"],
        inter: ['"Kanit"', "Inter", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      boxShadow: {
        ember: "0 0 44px rgba(182, 0, 168, 0.2)",
      },
    },
  },
  plugins: [],
} satisfies Config;
