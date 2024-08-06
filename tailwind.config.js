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
        "3.5xl": "32px",
        "10xl": "104px",
      },

      width: {
        38: "154px",
        card: "476px",
      },

      height: {
        title: "131px",
        card: "516px",
        cardImg: "242px",
      },

      inset: {
        title: "65%",
      },

      translate: {
        title: "-50%",
      },

      backgroundImage: {
        // fv: "url('images/background.png')",
        fv: "url('../public/images/background.png')",
        "footer-texture": "url('/img/footer-texture.png')",
      },

      boxShadow: {
        card: "0 0 10.7px 0 rgba(226, 166, 28, 1.0)",
      },
    },
  },
  plugins: [],
};
