/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        canvas: "#FAFBF9",
        forest: {
          DEFAULT: "#1B5E4B",
          dark: "#2D6A4F",
        },
        sage: "#95D5B2",
        charcoal: "#1A1A1A",
        muted: "#5C6B64",
      },
      fontFamily: {
        serif: ['"Source Serif 4"', "Georgia", "serif"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
