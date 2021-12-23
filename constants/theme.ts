import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    //Base Colors
    primary: "#F96D41",
    primary2: "#33354E", // Dark Blue
    secondary: "#25282F",

    //colors
    black: "#1E1B26",
    white: "#FFFFFF",
    lightgrey: "#64676D",
    lightgrey2: "#EFEFF0",
    lightgrey3: "#D4D5D6",
    lightgrey4: "#7D7E84",
    gray: "#2D3038",
    gray1: "#282C35",
    darkRed: "#31262F",
    lightBlue: "#C5505E",
    darkBlue: "#22273B",
    lightBlue: "#424BAF",
    darkGreen: "#213432",
    lightGreen: "#31Ad66",
};

export const SIZES = {
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,
    padding2: 36,

    //Fonts,
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,

    //App Dimensions
    width,
    height,
};

const appTheme = { COLORS, SIZES };

export default appTheme;
