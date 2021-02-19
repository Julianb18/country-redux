import { put, takeLatest } from "redux-saga/effects";
import { GetCountryAction } from "../../types";

import { fetchCountrySuccess } from "../actions/countries";

// generator function(similar to async await): * would be like async and yield would be like await
function* fetchCountry(action: GetCountryAction) {
  try {
    const data = yield fetch("https://restcountries.eu/rest/v2");
    const result = yield data.json();
    // put() is equivalent of dispatch
    yield put(fetchCountrySuccess(result));
  } catch (error) {
    console.log(error);
  }
}

const sagaWatcher = [takeLatest("GET_COUNTRY", fetchCountry)];
export default sagaWatcher;
