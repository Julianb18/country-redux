import { useState, useEffect } from "react";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";

import { AppState, Country } from "../types";
import { startCountryFetch } from "../redux/actions";

export const useCountries = (
  countryName: string,
  sortOrder: string,
  sortOption: string
): [Country[]] => {
  const dispatch = useDispatch();

  const [searchedCountries, setSearchedCountries] = useState<Country[]>([]);

  const countriesList = useSelector(
    (state: AppState) => state.countries.countryArr
  );

  useEffect(() => {
    dispatch(startCountryFetch());
  }, [dispatch]);

  // filter by country name and ordering by ascending or descending order
  useEffect(() => {
    let filteredByName = countriesList.filter((country) =>
      country.name.toLowerCase().includes(countryName.toLowerCase())
    );

    if (sortOrder === "Ascending") {
      filteredByName = _.orderBy(filteredByName, [sortOption], ["asc"]);
    } else if (sortOrder === "Descending") {
      filteredByName = _.orderBy(filteredByName, [sortOption], ["desc"]);
    }

    setSearchedCountries(filteredByName);
  }, [countryName, countriesList, sortOrder, sortOption]);

  return [searchedCountries];
};
