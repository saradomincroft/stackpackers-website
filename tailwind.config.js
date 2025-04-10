// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        spaceBlue: 'var(--space-blue)',
        cosmicBlue: 'var(--cosmic-blue)',
        neonBlue: 'var(--neon-blue)',
        stellarPurple: 'var(--stellar-purple)',
        darkSpace: 'var(--dark-space)',
        white: 'var(--white)',
        lightSteel: 'var(--light-steel)',
      },
    },
  },
  plugins: [],
}
