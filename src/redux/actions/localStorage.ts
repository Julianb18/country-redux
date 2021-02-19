import {
  AddToBucketListLocalStorageAction,
  AddToVisitedLocalStorageAction,
  ADD_TO_BUCKET_LIST_LOCAL_STORAGE,
  ADD_TO_VISITED_LOCAL_STORAGE,
  Country,
} from "../../types";

export function addToBucketListLocalStorage(
  countries: Country[]
): AddToBucketListLocalStorageAction {
  return {
    type: ADD_TO_BUCKET_LIST_LOCAL_STORAGE,
    payload: {
      countries,
    },
  };
}

export function addToVisitedLocalStorage(
  countries: Country[]
): AddToVisitedLocalStorageAction {
  return {
    type: ADD_TO_VISITED_LOCAL_STORAGE,
    payload: {
      countries,
    },
  };
}
