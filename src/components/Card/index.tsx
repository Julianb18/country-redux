import React from "react";

import { CountryImage } from "../CountryImage";
import { CountryProps } from "../../types";
import "./index.scss";
import { CardButtons } from "../CardButtons";

export const Card = ({ country, page }: CountryProps) => {
  const languages = country.languages.map((lang) => lang.name).join(", ");
  return (
    <div
      className="country-card card my-4 mx-4 bg-secondary text-light"
      style={{
        backgroundImage: `linear-gradient(rgba(73, 73, 73, 0.85), rgba(8, 8, 8, 0.85)), url(${country.flag})`,
      }}
    >
      <div className="country-card__img-container py-3 px-3">
        <CountryImage flagImg={country.flag} />
      </div>
      <div className="country-card__body-container card-body">
        <h2 className="card-title">{country.name}</h2>
        <p className="card-subtitle mb-2">
          <span>Region:</span> {country.region}
        </p>
        <p className="card-subtitle mb-2">
          <span>Population:</span> {country.population}
        </p>
        <p className="card-subtitle mb-2">
          <span>Capital:</span> {country.capital}
        </p>
        <p className="card-subtitle mb-2">
          <span>Languages:</span> {languages}
        </p>
      </div>
      <div className="country-card__btn-container">
        <CardButtons country={country} page={page} />
      </div>
    </div>
  );
};
