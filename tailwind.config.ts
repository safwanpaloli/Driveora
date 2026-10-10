import type { Config } from 'tailwindcss'

export default {
  content: [
    "./app/components/**/*.{vue,js,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/plugins/**/*.{js,ts}",
    "./app/app.vue",
  ],
  theme: {
    extend: {
      colors: {
        'verano-bg': '#080808',
        'verano-secondary': '#111111',
        'verano-surface': '#171717',
        'verano-text': '#F5F5F0',
        'verano-muted': '#9B9B9B',
        'verano-accent': '#d4af37', // champagne/gold
      },
      fontFamily: {
        'sans': ['Inter', 'Helvetica Neue', 'sans-serif'],
      }
    }
  }
}
