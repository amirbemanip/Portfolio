/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        black: '#000000',
        white: '#ffffff',
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        "premium-glow": "0 0 30px rgba(145, 94, 255, 0.3)",
      },
      letterSpacing: {
        tightest: '-0.06em',
        widest: '0.25em',
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/hero.png')",
      },
      fontFamily: {
        heading: ['"Syne"', 'sans-serif'],
        sans: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
