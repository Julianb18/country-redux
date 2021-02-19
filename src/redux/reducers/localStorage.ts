import {
  ADD_TO_BUCKET_LIST_LOCAL_STORAGE,
  AddToBucketListLocalStorageAction,
  StorageCountryState,
} from "../../types";

const initialState: StorageCountryState = {
  bucketList: [],
};

export default function localStorage(
  state = initialState,
  action: AddToBucketListLocalStorageAction
) {
  switch (action.type) {
    case ADD_TO_BUCKET_LIST_LOCAL_STORAGE: {
      const { countries } = action.payload;
      return { ...state, bucketList: countries };
    }

    default:
      return state;
  }
}

// TODO:remove file if not used
