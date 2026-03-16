/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#ffffff',
        offwhite: '#E8E8E8',
        dim: '#888888',
        surface: '#0d0d0d',
      },
      fontFamily: {
        heading: ['"Syne"', 'sans-serif'],
        sans: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.05em',
        tightest: '-0.07em',
        widest: '0.3em',
      },
      fontSize: {
        huge: ['clamp(5rem, 15vw, 15rem)', { lineHeight: '0.85', letterSpacing: '-0.05em' }],
        giant: ['clamp(3.5rem, 10vw, 10rem)', { lineHeight: '0.9', letterSpacing: '-0.05em' }],
      },
    },
  },
  plugins: [],
}
