import { FETCH_BOOKS_SUCCESS } from "../actions/booksActions";

const initialState = { books: [] };

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_SUCCESS:
      console.log("called in reduer");
      return;
    default:
      return state;
  }
};
