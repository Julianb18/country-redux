import React from "react";
import { useSelector } from "react-redux";

import { AppState } from "../../types";
import "./index.scss";

export const VisitedCounter = () => {
  const countries = useSelector(
    (state: AppState) => state.countries.visitedList
  );

  const countriesInVisited = countries.length;
  return (
    <div className="counter">
      <span className="counter__number">{countriesInVisited}</span>
    </div>
  );
};
