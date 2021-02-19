import { all } from "redux-saga/effects";

import uiSagas from "./ui";
import countryFetchSagas from "./countryFetch";
import bucketListStorage from "./bucketListStorage";
import visitedListStorage from "./visitedListStorage";

export default function* rootSaga() {
  yield all([
    ...uiSagas,
    ...countryFetchSagas,
    ...bucketListStorage,
    ...visitedListStorage,
  ]);
}
