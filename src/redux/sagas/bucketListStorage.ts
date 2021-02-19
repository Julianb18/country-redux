import { takeEvery } from "redux-saga/effects";
import {
  AddToBucketListAction,
  ADD_TO_BUCKET_LIST,
  ADD_TO_VISITED,
  Country,
  RemoveFromBucketListAction,
  REMOVE_FROM_BUCKET_LIST,
} from "../../types";

const updateLocalStorage = (bucketListCountries: Country[]) => {
  localStorage.setItem("bucketList", JSON.stringify(bucketListCountries));
};

const addCountryToStorage = (country: Country) => {
  const bucketListStorage = localStorage.getItem("bucketList");
  let bucketListCountries: Country[] =
    bucketListStorage !== null ? JSON.parse(bucketListStorage) : [];
  bucketListCountries = [...bucketListCountries, country];

  updateLocalStorage(bucketListCountries);
};

const removeCountryFromStorage = (country: Country) => {
  const bucketListStorage = localStorage.getItem("bucketList");
  let bucketListCountries: Country[] =
    bucketListStorage !== null ? JSON.parse(bucketListStorage) : [];
  bucketListCountries = bucketListCountries.filter(
    (c) => c.numericCode !== country.numericCode
  );

  updateLocalStorage(bucketListCountries);
};

function* saveCountryToBucketList(action: AddToBucketListAction) {
  yield addCountryToStorage(action.payload.country);
}

function* removeCountryFromBucketList(action: RemoveFromBucketListAction) {
  yield removeCountryFromStorage(action.payload.country);
}

export default [
  takeEvery(ADD_TO_BUCKET_LIST, saveCountryToBucketList),
  takeEvery(REMOVE_FROM_BUCKET_LIST, removeCountryFromBucketList),
  takeEvery(ADD_TO_VISITED, removeCountryFromBucketList),
];
