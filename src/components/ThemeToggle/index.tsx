import React, { useContext } from "react";

import ThemeContext from "../../contexts/ThemeConfig";

import "./index.scss";

export const ThemeToggle = () => {
  const { theme, switchTheme } = useContext(ThemeContext);

  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        className="checkbox"
        id="checkbox"
        onChange={switchTheme}
        defaultChecked={theme.mode !== "light"}
      />
      {/* {console.log(toggleChecked())} */}
      <label className="theme-label" htmlFor="checkbox">
        <i className="fas fa-sun"></i>
        <i className="fas fa-moon"></i>
        <div className="toggle"></div>
      </label>
    </div>
  );
};
