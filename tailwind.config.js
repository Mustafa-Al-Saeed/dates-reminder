/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '1px 4px 4px 1px rgba(85, 85, 85, 0.25)',
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}