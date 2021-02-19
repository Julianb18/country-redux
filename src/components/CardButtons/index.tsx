import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCountryToBucketList,
  addCountryToVisited,
  removeCountryFromBucketList,
  removeCountryFromVisited,
} from "../../redux/actions";
import { AppState, CountryProps } from "../../types";

import "./index.scss";

export const CardButtons = ({ country, page }: CountryProps) => {
  const dispatch = useDispatch();

  const bucketList = useSelector(
    (state: AppState) => state.countries.bucketList
  );
  const visitedList = useSelector(
    (state: AppState) => state.countries.visitedList
  );

  const countryInBucketList = bucketList.find(
    (c) => c.numericCode === country.numericCode
  );

  const countryInVisitedList = visitedList.find(
    (c) => c.numericCode === country.numericCode
  );

  const bucketListDisabled = countryInBucketList
    ? true
    : countryInVisitedList
    ? true
    : false;

  const visitedListDisabled = countryInVisitedList ? true : false;

  return (
    <div className="buttons-container">
      {page === "home" && (
        <>
          <button
            disabled={bucketListDisabled}
            onClick={() => dispatch(addCountryToBucketList(country))}
          >
            Bucket List
          </button>
          <button
            disabled={visitedListDisabled}
            onClick={() => dispatch(addCountryToVisited(country))}
          >
            Visited
          </button>
        </>
      )}

      {page === "bucketList" && (
        <>
          <button onClick={() => dispatch(addCountryToVisited(country))}>
            Visited
          </button>
          <button
            onClick={() => dispatch(removeCountryFromBucketList(country))}
          >
            Remove
          </button>
        </>
      )}

      {page === "visited" && (
        <>
          <button onClick={() => dispatch(removeCountryFromVisited(country))}>
            Remove
          </button>
        </>
      )}
    </div>
  );
};
