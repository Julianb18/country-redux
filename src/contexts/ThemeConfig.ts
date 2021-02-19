import React from "react";

export const themes = {
  light: {
    mode: "light",
    nav: "rgb(54, 103, 167)",
    background: "white",
    color: "black",
    border: "rgb(54, 103, 167)",
  },
  dark: {
    mode: "dark",
    nav: "rgb(23, 30, 39)",
    background: "rgb(40, 44, 56)",
    color: "rgb(255,255,255)",
    border: "rgb(64, 65, 68)",
  },
};

export default React.createContext({
  theme: themes.light,
  switchTheme: () => {},
});
