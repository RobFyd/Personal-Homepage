const colorNames = {
  scienceBlue: "#0366D6",
  blumine: "#1F5189",
  dodgerBlue: "#2188FF",
  shipCove: "#6D93BE",
  anakiwa: "#8CC2FF",
  tropicalBlue: "#CDE0F7",
  ironTransparent: "rgba(209, 213, 218, 0.3)",
  white: "#FFFFFF",
  whiteLilac: "#FBFBFE",
  porcelain: "#F2F3F4",
  mercury: "#E5E5E5",
  slateGray: "#6E7E91",
  doveGray: "#6D6D6D",
  tundora: "#414141",
  mineShaft: "#252525",
  mineShaftLighter: "#313131",
  lightCyan: "#DFF6FF",
};

const common = {
  breakpoints: {
    mobileMax: 767,
    tabletVerticalMax: 991,
    tabletHorizontalMax: 1199,
  },

  boxShadow:
    "0 -2px 50px rgba(9, 10, 51, 0.02), 0 16px 58px rgba(9, 10, 51, 0.03)",

  borderRadiusSmall: "4px",

  gradients:
    "linear-gradient(107deg, rgba(3,102,214,1) 80%, rgba(35,0,209,1) 95%, rgba(19,0,117,1) 100%)",
};

export const themeLight = {
  ...common,
  colors: {
    primary: colorNames.scienceBlue,
    textPrimary: colorNames.mineShaft,
    site: {
      background: colorNames.whiteLilac,
      text: colorNames.slateGray,
    },
    buttonLink: {
      text: colorNames.white,
      border: colorNames.ironTransparent,
      shadow: colorNames.anakiwa,
    },
    boxBackground: colorNames.lightCyan,
    headerLine: colorNames.mercury,
    title: {
      border: colorNames.mercury,
      borderHover: colorNames.tropicalBlue,
      header: colorNames.scienceBlue,
    },
    themeSwitch: {
      background: colorNames.mercury,
      icon: colorNames.white,
    },
  },
};

export const themeDark = {
  ...common,
  colors: {
    primary: colorNames.dodgerBlue,
    textPrimary: colorNames.white,
    site: {
      background: colorNames.mineShaft,
      text: colorNames.white,
    },
    buttonLink: {
      text: colorNames.white,
      border: colorNames.ironTransparent,
      shadow: colorNames.shipCove,
    },
    boxBackground: colorNames.mineShaftLighter,
    headreLine: colorNames.tundora,
    title: {
      border: colorNames.tundora,
      borderHover: colorNames.blumine,
      header: colorNames.white,
    },
    themeSwitch: {
      background: colorNames.doveGray,
      icon: colorNames.mineShaft,
    },
  },
};
