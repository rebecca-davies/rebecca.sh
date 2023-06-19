import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'desktop': '1280px',
      'tablet': '640px', 
    },
    fontFamily: {
      'sans': ["Roboto"],
      'roboto-mono': ["Roboto Mono"]
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
