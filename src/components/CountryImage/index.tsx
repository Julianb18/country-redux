import React from "react";

import "./index.scss";

type FlagProp = {
  flagImg: string;
};

export const CountryImage = ({ flagImg }: FlagProp) => {
  return (
    <div
      className="country-flag-wrapper"
      style={{
        backgroundImage: ` url(${flagImg})`,
      }}
    ></div>
  );
};
