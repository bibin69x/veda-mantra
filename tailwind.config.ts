import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          brown: {
            DEFAULT: "#2B241E",
            dark: "#1E1814",
            light: "#3E342B",
            muted: "#5A4D42",
            border: "#E8E2D9",
          },
          green: {
            DEFAULT: "#1D4F40",
            dark: "#13382D",
            light: "#286855",
            soft: "#E8F0EC",
            accent: "#388E3C",
          },
          cream: {
            DEFAULT: "#FBF9F5",
            light: "#FFFFFF",
            dark: "#F3EDE2",
            deep: "#E9DFD0",
          },
          gold: {
            DEFAULT: "#C5A059",
            light: "#D4B679",
            dark: "#9E7B36",
          },
          sand: "#EFE9DE",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cinzel", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-plus-jakarta)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        'luxury': '0 10px 30px -10px rgba(43, 36, 30, 0.08)',
        'luxury-hover': '0 20px 40px -15px rgba(43, 36, 30, 0.12)',
        'card-soft': '0 4px 20px rgba(0, 0, 0, 0.03)',
      },
      letterSpacing: {
        'widest-luxury': '0.2em',
      }
    },
  },
  plugins: [],
};

export default config;
