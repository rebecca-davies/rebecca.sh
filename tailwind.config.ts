import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'sans': ["Roboto"],
      'roboto-mono': ["Roboto Mono"]
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
