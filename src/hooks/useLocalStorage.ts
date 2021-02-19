import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  addToBucketListLocalStorage,
  addToVisitedLocalStorage,
} from "../redux/actions";
import { Country } from "../types";

export const useLocalStorage = () => {
  const dispatch = useDispatch();

  const getDataFromLocalStorage = () => {
    const bucketListStorage = localStorage.getItem("bucketList");
    let bucketListCountries: Country[] =
      bucketListStorage !== null ? JSON.parse(bucketListStorage) : [];

    const visitedListStorage = localStorage.getItem("visited");
    let visitedCountries: Country[] =
      visitedListStorage !== null ? JSON.parse(visitedListStorage) : [];

    dispatch(addToBucketListLocalStorage(bucketListCountries));
    dispatch(addToVisitedLocalStorage(visitedCountries));
  };

  useEffect(() => {
    getDataFromLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
};
