import { FETCH_CATEGORY_REQUEST, FETCH_CATEGORY_SUCCESS, FETCH_CATEGORY_FAILURE } from '../action/action';

const initialState = {
  data: [],
  loading: false,
  error: null
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case FETCH_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default categoryReducer;
