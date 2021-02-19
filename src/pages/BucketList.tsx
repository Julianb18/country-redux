import React, { useContext } from "react";
import { useSelector } from "react-redux";

import ThemeContext from "../contexts/ThemeConfig";
import { Card } from "../components/Card";

import { AppState } from "../types";
import "./BucketList.scss";

export const BucketList = () => {
  const themes = useContext(ThemeContext);

  const countries = useSelector(
    (state: AppState) => state.countries.bucketList
  );

  return (
    <div
      className="bucket-list"
      style={{ backgroundColor: themes.theme.background }}
    >
      <h1 style={{ color: themes.theme.color }}>Bucket List</h1>
      <div className="country-wrapper d-flex flex-wrap justify-content-center">
        {countries.map((country) => (
          <Card key={country.numericCode} country={country} page="bucketList" />
        ))}
      </div>
    </div>
  );
};
