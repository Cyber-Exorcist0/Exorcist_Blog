/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        exo: {
          bg: '#080B12',
          secondary: '#0D121C',
          card: '#111827',
          cardHover: '#162033',
          border: '#253044',
          borderLight: '#334155',
          primary: '#38BDF8',
          accent: '#8B5CF6',
          warning: '#F59E0B',
          text: '#E5E7EB',
          muted: '#94A3B8',
          subtle: '#64748B',
          danger: '#EF4444',
          success: '#10B981'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Consolas', 'monospace']
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: '#E5E7EB',
            a: {
              color: '#38BDF8',
              '&:hover': {
                color: '#7DD3FC'
              }
            },
            h1: { color: '#F1F5F9' },
            h2: { color: '#F1F5F9' },
            h3: { color: '#F1F5F9' },
            h4: { color: '#F1F5F9' },
            strong: { color: '#F1F5F9' },
            blockquote: {
              color: '#94A3B8',
              borderLeftColor: '#38BDF8'
            },
            code: {
              color: '#38BDF8',
              backgroundColor: '#0D121C',
              padding: '0.2rem 0.4rem',
              borderRadius: '0.25rem',
              fontWeight: '400'
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            pre: {
              backgroundColor: '#0D121C',
              border: '1px solid #253044',
              color: '#E5E7EB'
            },
            hr: { borderColor: '#253044' }
          }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
};
