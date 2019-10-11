import {FETCH_SMURF_FAILURE, FETCH_SMURF_START, FETCH_SMURF_SUCCESS, SMURF_ADDED, SMURF_ADDING,} from "../actions";
  
const initialState = {
  smurfs: [],
  isFetching: false,
  addingSmurf: false,
  error: null
};
  
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        error: "",
        isFetching: true
      };

    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: false,
        smurfs: action.payload
      };

    case SMURF_ADDING:
      return {
        ...state,
        addingSmurf: true
      };

    case SMURF_ADDED:
      return {
        ...state,
        error: "",
        addingSmurf: false,
        smurfs: action.payload
      };

    case FETCH_SMURF_FAILURE:
      return {
        ...state,
        error: "",
        addingSmurf: false,
        isFetching: false,
      };

    default:
      return state;
  }
};