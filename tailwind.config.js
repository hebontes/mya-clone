/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    extend: {
      fontSize: {
        'sx': '0.8125rem' // 13px
      },
      colors: {
        "black-500": '#8C929B',
        "black-600": '#6F7383',
        "black-800": '#272A37',
        "gray-50": "#F2F3F6",
        "gray-100": "#E9E9F0",
        "gray-200": "#E2E5EB",
        "gray-300": "#D8DBE2",
        whiteMuted: "#F9F9FB",
        primaryOrange: '#FD4100',
      },
      maxWidth: {
        'container': '1050px',
      },
      boxShadow: {
        'filterBox': '0px 4px 16px 0px rgba(164, 174, 193, 0.10)',
        'selectBox': '0px 4px 20px 0px rgba(164, 174, 193, 0.40)',
        'searchBox': '0px 2px 16px 0px rgba(39, 42, 55, 0.13)'

      },

    },
  },
  plugins: [],
}
