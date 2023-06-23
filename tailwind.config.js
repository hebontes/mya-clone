/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "black-600": '#6F7383',
        "gray-100": "#E9E9F0",
        "gray-200": "#E2E5EB",
        whiteMuted: "#F9F9FB",
        primaryOrange: '#FD4100',
      },
      maxWidth: {
        'container': '1050px',
      },
      boxShadow: {
        'filterBox': '0px 4px 16px 0px rgba(164, 174, 193, 0.10)'
      }
    },
  },
  plugins: [],
}
