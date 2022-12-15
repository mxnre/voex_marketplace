module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'accordian-hover': '0px 0px 10px 5px white',
        'card': '1px 0px 18px 16px rgb(23 5 59 / 73%)',
        'card-white':'0px 0px 10px 5px white/73%'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  variants: {
    scrollbar: ['rounded']
}
}

