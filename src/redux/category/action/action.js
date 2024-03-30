import axios from 'axios';

// Action Types
export const FETCH_CATEGORY_REQUEST = 'FETCH_CATEGORY_REQUEST';
export const FETCH_CATEGORY_SUCCESS = 'FETCH_CATEGORY_SUCCESS';
export const FETCH_CATEGORY_FAILURE = 'FETCH_CATEGORY_FAILURE';

// Action Creators
export const fetchCategoryRequest = () => ({
  type: FETCH_CATEGORY_REQUEST
});

export const fetchCategorySuccess = (data) => ({
  type: FETCH_CATEGORY_SUCCESS,
  payload: data
});

export const fetchCategoryFailure = (error) => ({
  type: FETCH_CATEGORY_FAILURE,
  payload: error
});

// Thunk Action
export const fetchCategoryData = () => {
  return async (dispatch) => {
    dispatch(fetchCategoryRequest());
    try {
      const response = await axios.get('http://localhost:8085/category/findall');
      console.log(response)
      dispatch(fetchCategorySuccess(response.data));
    } catch (error) {
      dispatch(fetchCategoryFailure(error));
    }
  };
};
