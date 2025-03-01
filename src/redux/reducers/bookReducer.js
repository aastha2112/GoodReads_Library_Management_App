import {
  FETCH_BOOKS_FAILURE,
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
} from "../actions/booksActions";

const initialState = { books: [], loading: false, error: null };

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_SUCCESS:
      console.log("called in reduer");

      return { ...state, books: action.payload, loading: false };
    case FETCH_BOOKS_REQUEST:
      return { ...state, loading: true };
    case FETCH_BOOKS_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};
