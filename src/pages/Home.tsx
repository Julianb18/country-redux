/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
// import { useSelector } from "react-redux";

import { Card } from "../components/Card";
import { Search } from "../components/Search";
import { useCountries } from "../hooks/useCountries";
import { Sorting } from "../components/Sorting";
import ThemeContext from "../contexts/ThemeConfig";
import "./Home.scss";
// import { useTheme } from "../contexts/ThemeContext";

function App() {
  const [countryName, setCountryName] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("Ascending");
  const [sortOption, setSortOption] = useState<string>("name");
  const [countries] = useCountries(countryName, sortOrder, sortOption);
  const themes = useContext(ThemeContext);
  // const { theme } = useTheme();

  // setting sort order to Ascending or descending
  const handleSortOrder = (order: string) => {
    setSortOrder(order);
    console.log(order);
  };

  // setting sort option to name or population
  const handleSortOption = (option: string) => {
    setSortOption(option);
    console.log(option);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountryName(event.target.value);
  };

  return (
    <div
      style={{ backgroundColor: themes.theme.background }}
      className="home-page d-flex flex-column align-items-center"
    >
      <div className="search-container d-flex justify-content-center align-items-center py-4 mb-4">
        <Search countryName={countryName} handleChange={handleChange} />
        <Sorting
          sortOrder={sortOrder}
          handleSortOrder={handleSortOrder}
          sortOption={sortOption}
          handleSortOption={handleSortOption}
        />
      </div>

      <div className="country-wrapper d-flex flex-wrap justify-content-center">
        {countries.map((country) => (
          <Card key={country.numericCode} country={country} page="home" />
        ))}
      </div>
    </div>
  );
}

export default App;
