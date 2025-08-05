// tailwind.config.js
const plugin = require("@tailwindcss/typography");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'], // if you're using Inter
      },
       colors: {
      'muted-foreground': 'hsl(215, 16%, 47%)', // or any grayish value you prefer
    },
    },
  },
  plugins: [plugin],
};
