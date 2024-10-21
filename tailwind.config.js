/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4a5c78',
        secondary: '#b3bcc6',
        accent: {
          DEFAULT: '#449bfc',
          // gradient: 'linear-gradient(103.52deg, #68e4dd 18.44%, #449bfc 61.53%, #449bfc 90.78%)'
          light: '#68e4dd'
        },
        background: '#fafcff',
        headings: '#1c2b49'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem'
      }
    }
  },
  plugins: []
}
