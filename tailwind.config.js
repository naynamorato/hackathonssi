/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          deep: '#01112A',
          card: '#0A1B3D',
        },
        teal: '#58BABB',
        indigo: '#7683B8',
        leaf: '#93C472',
        cyan: '#4BADD4',
        mist: '#C9D2DE',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.5' },
          '50%': { transform: 'translate(20px, -30px) scale(1.15)', opacity: '0.75' },
        },
        breatheAlt: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1.1)', opacity: '0.45' },
          '50%': { transform: 'translate(-25px, 20px) scale(0.95)', opacity: '0.7' },
        },
      },
      animation: {
        breathe: 'breathe 14s ease-in-out infinite',
        breatheAlt: 'breatheAlt 18s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
