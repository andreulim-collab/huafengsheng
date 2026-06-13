/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#C9A84C',
        'primary-dark': '#A88930',
        'primary-light': '#E0C56A',
        accent: '#4A80F0',
        'accent-dark': '#2563EB',
        background: '#0D1B38',
        surface: '#152040',
        ink: '#F0F4FF',
        muted: '#8A9EC0',
        divider: '#1E3258',
        deep: '#080F1E',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        '2.5xl': '1.25rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
        '7xl': '4rem',
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        blink: 'blink 1s step-end infinite',
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 32s linear infinite',
        'marquee-reverse': 'marquee-reverse 32s linear infinite',
        'marquee-quad': 'marquee-quad 36s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'marquee-quad': {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-25%)' },
        },
      },
    },
  },
  plugins: [],
}
