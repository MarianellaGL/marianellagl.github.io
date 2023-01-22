/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: { backgroundImage: {
      'background': "url('../public/background.jpg')",
    },
    spacing: {
      '23px': '23px',
      '118px': '118px',
    }
  },
  },
  plugins: [],
}
