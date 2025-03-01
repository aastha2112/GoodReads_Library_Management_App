import {
  FETCH_BOOKS_FAILURE,
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
} from "../actions/booksActions";

const initialState = { books: [], loading: false, error: null };

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_SUCCESS:
      const booksObject = action.payload; // Firebase response object
      if (!booksObject) return { ...state, books: [], loading: false }; // Ensure books is never undefined

      const booksArray = [];

      Object.keys(booksObject).forEach((userId) => {
        const userBooks = booksObject[userId]; // Each user's books
        Object.keys(userBooks).forEach((bookId) => {
          booksArray.push({
            id: bookId, // Unique book ID
            ...userBooks[bookId], // Extract book details
          });
        });
      });

      return { ...state, books: booksArray, loading: false };
    case FETCH_BOOKS_REQUEST:
      return { ...state, loading: true };
    case FETCH_BOOKS_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};
