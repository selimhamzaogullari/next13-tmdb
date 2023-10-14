import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './container/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'color-text': 'var(--color-text)',
      'color-bg': 'var(--color-bg)',
      'color-text-secondary': 'var(--color-text-secondary)',
      primary: 'var(--color-primary)',
      black: 'var(--color-black)',
      white: 'var(--color-white)',
      'gray-light': 'var(--color-gray-light)',
      gray: 'var(--color-gray)',
      'gray-dark': 'var(--color-gray-dark)',
      blue: 'var(--color-blue)',
      purple: 'var(--color-purple)',
      pink: 'var(--color-pink)',
      orange: 'var(--color-orange)',
      green: 'var(--color-green)',
      yellow: 'var(--color-yellow)',
    },
  },
  plugins: [],
};
export default config;
