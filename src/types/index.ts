// Action types
export const TOGGLE_DIALOG = "TOGGLE_DIALOG";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const ADD_TO_BUCKET_LIST = "ADD_TO_BUCKET_LIST";
export const REMOVE_FROM_BUCKET_LIST = "REMOVE_FROM_BUCKET_LIST";
export const ADD_TO_VISITED = "ADD_TO_VISITED";
export const REMOVE_FROM_VISITED = "REMOVE_FROM_VISITED";
export const ADD_TO_BUCKET_LIST_LOCAL_STORAGE =
  "ADD_TO_BUCKET_LIST_LOCAL_STORAGE";
export const ADD_TO_VISITED_LOCAL_STORAGE = "ADD_TO_VISITED_LOCAL_STORAGE";

// Enum
export enum DialogType {
  SignIn = "signIn",
  SignUp = "signUp",
}

export type ToggleDialogAction = {
  type: typeof TOGGLE_DIALOG;
  payload: {
    dialog: DialogType;
  };
};

export type UiActions = ToggleDialogAction;

export type Languages = {
  name: string;
};

// type for single country obj
export type Country = {
  flag: string;
  name: string;
  region: string;
  population: number;
  capital: string;
  languages: Languages[];
  numericCode: number;
};

// types for actions
export type GetCountryAction = {
  type: typeof FETCH_SUCCESS;
  payload: {
    countries: Country[];
  };
};

export type AddToBucketListAction = {
  type: typeof ADD_TO_BUCKET_LIST;
  payload: {
    country: Country;
  };
};

export type RemoveFromBucketListAction = {
  type: typeof REMOVE_FROM_BUCKET_LIST;
  payload: {
    country: Country;
  };
};

export type AddToVisitedAction = {
  type: typeof ADD_TO_VISITED;
  payload: {
    country: Country;
  };
};

export type RemoveFromVisitedAction = {
  type: typeof REMOVE_FROM_VISITED;
  payload: {
    country: Country;
  };
};

export type AddToBucketListLocalStorageAction = {
  type: typeof ADD_TO_BUCKET_LIST_LOCAL_STORAGE;
  payload: {
    countries: Country[];
  };
};

export type AddToVisitedLocalStorageAction = {
  type: typeof ADD_TO_VISITED_LOCAL_STORAGE;
  payload: {
    countries: Country[];
  };
};

export type CountryAction =
  | GetCountryAction
  | AddToBucketListAction
  | RemoveFromBucketListAction
  | AddToVisitedAction
  | RemoveFromVisitedAction
  | AddToBucketListLocalStorageAction
  | AddToVisitedLocalStorageAction;

// types for states
export type CountryState = {
  countryArr: Country[];
  bucketList: Country[];
  visitedList: Country[];
};

export type StorageCountryState = {
  bucketList: Country[];
};

// Using dynamic keys from an enum
export type UiState = {
  dialogOpen: {
    [key in DialogType]?: boolean;
  };
};
// state of the whole app
export type AppState = {
  ui: UiState;
  countries: CountryState;
};

// types for components
export type CountryProps = {
  country: Country;
  page: string;
};

export type SearchProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  countryName: string;
};

export type Sort = {
  sortOrder: string;
  sortOption: string;
  handleSortOrder: (order: string) => void;
  handleSortOption: (option: string) => void;
};

export type SortOrder = {
  sortOrder: string;
  handleSortOrder: (order: string) => void;
};

export type SortHandleOptions = {
  sortOption: string;
  handleSortOption: (option: string) => void;
};

// context types

export type Theme = {
  nav: string;
  background: string;
  color: string;
  border: string;
};

export type ObjTheme = {
  theme: Theme;
};
