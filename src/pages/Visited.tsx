import React, { useContext } from "react";
import { useSelector } from "react-redux";

import { Card } from "../components/Card";
import { AppState } from "../types";
import ThemeContext from "../contexts/ThemeConfig";
import "./Visited.scss";

export const Visited = () => {
  const themes = useContext(ThemeContext);

  const countries = useSelector(
    (state: AppState) => state.countries.visitedList
  );

  return (
    <div
      className="visited-container"
      style={{ backgroundColor: themes.theme.background }}
    >
      <h1 style={{ color: themes.theme.color }}>Visited</h1>
      <div className="country-wrapper d-flex flex-wrap justify-content-center">
        {countries.map((country) => (
          <Card key={country.numericCode} country={country} page="visited" />
        ))}
      </div>
    </div>
  );
};
