import { combineReducers } from "redux";
import { bookReducer } from "./bookReducer";

const initialState = { users: [], loading: false, error: null };

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  auth: authReducer,
  books: bookReducer,
});
