import React from "react";

import { SearchProps } from "../../types";
import "./index.scss";

export const Search = ({ countryName, handleChange }: SearchProps) => {
  return (
    <div className="search-wrapper input-group">
      <input
        type="text"
        name="countryName"
        className="search-wrapper__input form-control py-4"
        placeholder="Search Country..."
        value={countryName}
        onChange={handleChange}
      />
    </div>
  );
};
