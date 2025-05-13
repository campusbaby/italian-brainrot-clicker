/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8B5CF6', // 紫色
          dark: '#7C3AED',
        },
        secondary: {
          DEFAULT: '#EC4899', // 粉色
          dark: '#DB2777',
        },
        background: {
          DEFAULT: '#111827', // 暗黑背景
          light: '#1F2937',
        },
        accent: {
          DEFAULT: '#10B981', // 绿色
          dark: '#059669',
        },
        text: {
          DEFAULT: '#F9FAFB',
          muted: '#9CA3AF',
        },
        dark: {
          DEFAULT: '#0F172A',
          lighter: '#1E293B',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
        mono: ['var(--font-roboto-mono)', 'ui-monospace'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      },
      boxShadow: {
        'neon': '0 0 5px theme("colors.primary.DEFAULT"), 0 0 20px theme("colors.primary.dark")',
        'neon-accent': '0 0 5px theme("colors.accent.DEFAULT"), 0 0 20px theme("colors.accent.dark")',
      },
    },
  },
  plugins: [],
}; 