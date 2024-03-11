/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "400px",
      min455: "455px",
      min457: "457px",
      min500: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      "2lg": "1200px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
      "4xl": "2560px",
      "5xl": "3840px",
    },
    extend: {
      colors: {
        "primary-color": "#407BFF",
        "secondary-color": "#FFC727",
        "body-color": "#E3EDF8",
      },
    },
  },
};
