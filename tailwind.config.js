/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#09090b',
          light: '#121214',
          elevated: '#1a1a1e',
          card: '#11131c',
          bg1: '#05070b',
          bg2: '#090b12',
          bg3: '#0e1117',
          bg4: '#111827',
          bg5: '#161b22',
        },
        electric: {
          cyan: '#00F5FF',
          emerald: '#00FFA3',
          sky: '#38BDF8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'glass-radial': 'radial-gradient(120% 120% at 50% 10%, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0) 100%)',
        'neon-glow': 'radial-gradient(circle, rgba(0, 245, 255, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
