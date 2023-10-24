/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#00FCED',
        secondary: '#92EEE8',
      },
      fontFamily: {
        primary: 'Balsamiq Sans',
      },
      screens: {
        'xxl': '1751px',
        'mmd': '851px',
        'gsm': '571px',
        'msm': '491px',
        'vsm': '406px',
        'vvsm': '100px',
      },
    }
  },
  plugins: [],
}