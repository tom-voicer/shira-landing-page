/* eslint-disable global-require */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './_posts/**/*.md'],
  theme: {
    fontFamily: {
      sans: ['ui-sans-serif', 'Noto Sans Hebrew', 'system-ui'],
    },
  },
  variants: {
    fill: ['hover', 'focus'], // this line does the trick
  },
  daisyui: {
    themes: [
      {
        shira: {
          primary: '#7fc1d1',
          secondary: '#ffb700',
          accent: '#e73d52',
          neutral: '#323F51',
          'base-100': '#FFFFFF',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
    ],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
