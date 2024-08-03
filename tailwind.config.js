/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // カラー設定
    colors: {
      primary: "#FC840D",
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
    // fontSize: {},
    // 字間
    letterSpacing: {
      en: ".1em",
      jp: ".04em",
    },
  },
  plugins: [],
};
