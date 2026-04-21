import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        k: {
          bg:     '#F8F8F6',
          black:  '#0A0A0A',
          white:  '#FDFDFC',
          g900:   '#1F1F1E',
          g700:   '#535250',
          g500:   '#949189',
          g300:   '#BCB9AE',
          g200:   '#D4D3CE',
          g100:   '#E9E8E7',
          g50:    '#F1F0EF',
          terra:  '#AD715C',
          amber:  '#D6A151',
          blue:   '#3A6278',
          forest: '#405B50',
          purple: '#52405B',
          green:  '#69FF81',
        },
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-dot': 'pulse-dot 1.8s ease-in-out infinite',
        'fade-in':   'fade-in 0.4s ease-out',
      },
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { opacity: '1',    transform: 'scale(1)' },
          '50%':      { opacity: '0.45', transform: 'scale(0.75)' },
        },
        'fade-in': {
          '0%':   { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
