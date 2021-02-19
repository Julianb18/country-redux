import { takeEvery } from "redux-saga/effects";
import {
  AddToVisitedAction,
  ADD_TO_VISITED,
  Country,
  RemoveFromVisitedAction,
  REMOVE_FROM_VISITED,
} from "../../types";

const updateLocalStorage = (visitedCountries: Country[]) => {
  localStorage.setItem("visited", JSON.stringify(visitedCountries));
};

const addCountryToStorage = (country: Country) => {
  const visitedListStorage = localStorage.getItem("visited");
  let visitedCountries: Country[] =
    visitedListStorage !== null ? JSON.parse(visitedListStorage) : [];
  visitedCountries = [...visitedCountries, country];

  updateLocalStorage(visitedCountries);
};

const removeCountryFromStorage = (country: Country) => {
  const visitedListStorage = localStorage.getItem("visited");
  let visitedCountries: Country[] =
    visitedListStorage !== null ? JSON.parse(visitedListStorage) : [];
  visitedCountries = visitedCountries.filter(
    (c) => c.numericCode !== country.numericCode
  );

  updateLocalStorage(visitedCountries);
};

function* saveCountryToVisited(action: AddToVisitedAction) {
  yield addCountryToStorage(action.payload.country);
}

function* removeCountryFromVisited(action: RemoveFromVisitedAction) {
  yield removeCountryFromStorage(action.payload.country);
}

export default [
  takeEvery(ADD_TO_VISITED, saveCountryToVisited),
  takeEvery(REMOVE_FROM_VISITED, removeCountryFromVisited),
];
