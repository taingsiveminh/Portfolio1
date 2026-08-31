/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#090a0f',
        card: '#0f111a',
        'card-border': '#1e2235',
        'brand-blue': {
          DEFAULT: '#3b82f6',
          glow: '#60a5fa',
          deep: '#1d4ed8',
        },
        'brand-violet': {
          DEFAULT: '#8b5cf6',
          glow: '#a78bfa',
          deep: '#6d28d9',
        },
        'brand-cyan': {
          DEFAULT: '#06b6d4',
          glow: '#22d3ee',
        },
        'accent-emerald': '#10b981',
      },
      fontFamily: {
        sans: ['Inter', 'Kantumruy Pro', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        khmer: ['Kantumruy Pro', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-spin': 'spin 12s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
