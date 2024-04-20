module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#191c42',
      },
    },
    screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
        qhd: { raw: '(min-height:1440px) and (max-width:2560px)' },
    },
},

  plugins: [],
};
