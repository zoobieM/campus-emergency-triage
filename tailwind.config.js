/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        canvas: '#090D16',
        surface: '#0F172A',
        panel: '#1E293B',
        border: '#1E2D3D',
        'border-light': '#334155',
        muted: '#64748B',
        subtle: '#94A3B8',
        primary: '#F8FAFC',
        accent: '#38BDF8',
        emergency: {
          DEFAULT: '#EF4444',
          dim: '#450A0A',
          border: '#7F1D1D',
          text: '#FCA5A5',
        },
        urgent: {
          DEFAULT: '#F59E0B',
          dim: '#451A03',
          border: '#78350F',
          text: '#FCD34D',
        },
        normal: {
          DEFAULT: '#22C55E',
          dim: '#052E16',
          border: '#14532D',
          text: '#86EFAC',
        },
        dispatched: {
          DEFAULT: '#38BDF8',
          dim: '#0C1A2E',
          border: '#075985',
          text: '#7DD3FC',
        },
      },
      animation: {
        'pulse-emergency': 'pulse-emergency 1.5s ease-in-out infinite',
        'radar-ping': 'radar-ping 1.5s ease-out infinite',
        'slide-up': 'slide-up 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 0.2s ease forwards',
        'flash-border': 'flash-border 0.8s ease-in-out infinite',
      },
      keyframes: {
        'pulse-emergency': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        'radar-ping': {
          '0%': { transform: 'scale(1)', opacity: '0.8' },
          '100%': { transform: 'scale(2.5)', opacity: '0' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'flash-border': {
          '0%, 100%': { borderColor: '#7F1D1D' },
          '50%': { borderColor: '#EF4444' },
        },
      },
    },
  },
  plugins: [],
}
