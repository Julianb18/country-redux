import React from "react";
import { useSelector } from "react-redux";

import { AppState } from "../../types";
import "./index.scss";

export const BucketListCounter = () => {
  const countries = useSelector(
    (state: AppState) => state.countries.bucketList
  );
  const countriesInBucketList = countries.length;
  return (
    <div className="counter">
      <span className="counter__number">{countriesInBucketList}</span>
    </div>
  );
};
