import * as types from "../constants/ActionTypes";
const initialState = {
  dataCorona: null,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_DATA_CORONA_RUNTIME: {
      return { ...state, dataCorona: action.payload, loading: false };
    }

    case types.SET_LOADING: {
      return { ...state, loading: true };
    }
    default:
      return state;
  }
};
