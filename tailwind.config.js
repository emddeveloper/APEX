/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#070b14',
        panel: '#0f1726',
        steel: '#162033',
        electric: '#1e90ff',
        spark: '#ff8f1f',
        glow: '#7dd3fc',
      },
      fontFamily: {
        display: ['Rajdhani', 'sans-serif'],
        body: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        electric: '0 0 35px rgba(30, 144, 255, 0.22)',
        spark: '0 0 30px rgba(255, 143, 31, 0.2)',
      },
      backgroundImage: {
        mesh: 'radial-gradient(circle at top, rgba(30,144,255,0.18), transparent 40%), radial-gradient(circle at bottom right, rgba(255,143,31,0.15), transparent 30%)',
      },
    },
  },
  plugins: [],
}
