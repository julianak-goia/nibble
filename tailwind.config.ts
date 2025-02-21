import type { Config } from "tailwindcss";
import { extendTheme } from "./tailwind.theme";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      ...extendTheme,
    },
  },
  plugins: [],
} satisfies Config;
