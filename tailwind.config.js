/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // フォント
    fontFamily: {
      en: ["Outfit"],
      jp: ["Zen Kaku Gothic New"],
    },
    //フォントサイズ
    // fontSize: {
    //   xs: "10px",
    // },
    // 字間
    letterSpacing: {
      en: ".1em",
      jp: ".04em",
    },
    extend: {
      // カラー設定
      colors: {
        primary: "#FC840D",
        buttonGrad: "#F7D4AA",
        black: "#000000",
        gray: "#9D9791",
        white: "#FFFFFF",
        titleGrad1: "#FFAF5F",
        titleGrad2: "#F5D37D",
      },
      fontSize: {
        xxs: "10px",
        "10xl": "104px",
      },
      width: {
        38: "154px",
      },
      backgroundImage: {
        // fv: "url('images/background.png')",
        fv: "url('../public/images/background.png')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
