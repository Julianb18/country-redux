import { combineReducers } from "redux";

import ui from "./ui";
import countries from "./countries";
// import localStorage from "./localStorage";

const createRootReducer = () =>
  combineReducers({
    ui,
    countries,
  });

export default createRootReducer;
