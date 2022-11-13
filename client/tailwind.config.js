module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        10: "10px",
        15: "15px",
        25: "25px",
        32: "32px",
        50: "50px",
        69: "69px",
        82: "82px",
        100: "100px",
        150: "150px",
        320: "320px",
      },
      padding: {
        10: "10px",
        15: "15px",
        17: "17px",
        30: "30px",
        100: "100px",
        150: "150px",
        200: "200px",
      },
      width: {
        144: "144px",
        250: "250px",
        360: "360px",
      },
      height: {
        30: "30px",
        50: "50px",
        72: "72px",
        80: "80px",
        100: "100px",
        140: "140px",
        453: "463px",
        595: "595px",
      },
      maxHeight: {
        370: "370px",
      },
      minWidth: {
        210: "210px",
        350: "350px",
        620: "620px",
      },
      textColor: {
        mainColor: "#D12129",
        lightGray: "#F1EFEE",
        primary: "#FAFAFA",
        secColor: "#efefef",
        navColor: "#BEBEBE",
      },
      backgroundColor: {
        mainColor: "#D12129",
        secondaryColor: "#F0F0F0",
        gray: "#D9D9D9",
        grayBorder: "#ADADAD",
        grayline: "#888888",
        blackOverlay: "rgba(0, 0 ,0 ,0.7)",
      },
      backgroundImage: {
        backgroundImg: "url('./images/HeroSectionImages/heroBackground.png')",
      },
      dropShadow: {
        customShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  variants: {
    // backgroundColor: ['active'],
    extend: {},
  },
  plugins: [],
};
