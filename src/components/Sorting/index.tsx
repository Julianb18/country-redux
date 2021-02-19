import React from "react";

import "./index.scss";
import { SortingOrder } from "./SortingOrder";
import { SortOption } from "./SortOption";
import { Sort } from "../../types";

export const Sorting = ({
  sortOrder,
  sortOption,
  handleSortOrder,
  handleSortOption,
}: Sort) => {
  return (
    <div className="sort-wrapper ml-3">
      <SortingOrder sortOrder={sortOrder} handleSortOrder={handleSortOrder} />
      <SortOption sortOption={sortOption} handleSortOption={handleSortOption} />
    </div>
  );
};
