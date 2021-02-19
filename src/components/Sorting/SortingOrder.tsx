import React from "react";

import { SortOrder } from "../../types";

export const SortingOrder = ({ sortOrder, handleSortOrder }: SortOrder) => {
  return (
    // eslint-disable-next-line jsx-a11y/no-onchange
    <select
      className="drop-menu"
      value={sortOrder}
      onChange={(e) => handleSortOrder(e.target.value)}
    >
      <option value="Ascending">Ascending</option>
      <option value="Descending">Descending</option>
    </select>
  );
};
