/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // カラー設定
    colors: {
      primary: "#FC840D",
      buttonGrad: "#F7D4AA",
      black: "#000000",
      gray: "#9D9791",
      white: "#FFFFFF",
    },
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
      fontSize: {
        xxs: "10px",
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
