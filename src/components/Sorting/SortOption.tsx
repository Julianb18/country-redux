import React from "react";

import { SortHandleOptions } from "../../types";

export const SortOption = ({
  sortOption,
  handleSortOption,
}: SortHandleOptions) => {
  return (
    // eslint-disable-next-line jsx-a11y/no-onchange
    <select
      className="drop-menu"
      value={sortOption}
      onChange={(e) => handleSortOption(e.target.value)}
    >
      <option value="name">Name</option>
      <option value="population">Population</option>
    </select>
  );
};
