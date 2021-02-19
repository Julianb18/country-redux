import {
  CountryState,
  FETCH_SUCCESS,
  ADD_TO_BUCKET_LIST,
  CountryAction,
  REMOVE_FROM_BUCKET_LIST,
  ADD_TO_VISITED,
  REMOVE_FROM_VISITED,
  ADD_TO_BUCKET_LIST_LOCAL_STORAGE,
  ADD_TO_VISITED_LOCAL_STORAGE,
} from "../../types";

const initialState: CountryState = {
  countryArr: [],
  bucketList: [],
  visitedList: [],
};

export default function countries(state = initialState, action: CountryAction) {
  switch (action.type) {
    // fetching data from api
    case FETCH_SUCCESS: {
      const { countries } = action.payload;

      return { ...state, countryArr: countries };
    }

    case ADD_TO_BUCKET_LIST_LOCAL_STORAGE: {
      const { countries } = action.payload;
      return { ...state, bucketList: countries };
    }

    case ADD_TO_VISITED_LOCAL_STORAGE: {
      const { countries } = action.payload;
      return { ...state, visitedList: countries };
    }

    case ADD_TO_BUCKET_LIST: {
      const { country } = action.payload;
      if (state.bucketList.find((c) => c.numericCode === country.numericCode)) {
        return state;
      }
      // Always return new state (e.g, new object) if changed
      return { ...state, bucketList: [...state.bucketList, country] };
    }

    case REMOVE_FROM_BUCKET_LIST: {
      const { country } = action.payload;
      const countries = state.bucketList.filter(
        (c) => c.numericCode !== country.numericCode
      );

      // Always return new state (e.g, new object) if changed
      return { ...state, bucketList: [...countries] };
    }

    case ADD_TO_VISITED: {
      const { country } = action.payload;
      return {
        ...state,
        bucketList: state.bucketList.filter(
          (c) => c.numericCode !== country.numericCode
        ),
        visitedList: [country, ...state.visitedList],
      };
    }

    case REMOVE_FROM_VISITED: {
      const { country } = action.payload;
      const countries = state.visitedList.filter(
        (c) => c.numericCode !== country.numericCode
      );

      // Always return new state (e.g, new object) if changed
      return { ...state, visitedList: [...countries] };
    }

    default:
      return state;
  }
}
