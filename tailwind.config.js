/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: [],
      serif: [],
    },
    extend: {
      colors: {
        'primary-500': '#18A4E1',
        'primary-200': '#1fffff',
        'secondary-500': '#ff7849',
        'secondary-200': '#ffff49',
        'accent-500': '#ffc82c',
        'accent-200': '#ffff2c',
        'variant-500': '#8492a6',
        'variant-200': '#dddddd',
        wall: '#f3f5f8',
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      transitionProperty: {
        width: 'width',
      },
    },
  },
  plugins: [],
};
