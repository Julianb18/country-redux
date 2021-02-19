import {
  GetCountryAction,
  Country,
  FETCH_SUCCESS,
  ADD_TO_BUCKET_LIST,
  REMOVE_FROM_BUCKET_LIST,
  ADD_TO_VISITED,
  REMOVE_FROM_VISITED,
  CountryAction,
} from "../../types";

// action dealing with getting the country data
export const fetchCountrySuccess = (countries: Country[]): GetCountryAction => {
  return {
    type: FETCH_SUCCESS,
    payload: { countries },
  };
};

export const startCountryFetch = () => {
  return {
    type: "GET_COUNTRY",
  };
};
// =====================================

// actions for movement of cards between pages
export const addCountryToBucketList = (country: Country): CountryAction => {
  return {
    type: ADD_TO_BUCKET_LIST,
    payload: { country },
  };
};

export const removeCountryFromBucketList = (
  country: Country
): CountryAction => {
  return {
    type: REMOVE_FROM_BUCKET_LIST,
    payload: { country },
  };
};

export const addCountryToVisited = (country: Country): CountryAction => {
  return {
    type: ADD_TO_VISITED,
    payload: { country },
  };
};

export const removeCountryFromVisited = (country: Country): CountryAction => {
  return {
    type: REMOVE_FROM_VISITED,
    payload: { country },
  };
};
// =====================================
