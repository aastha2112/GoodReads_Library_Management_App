import { combineReducers } from "redux";
import { bookReducer } from "./bookReducer";
import {
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
  SET_USER,
} from "../actions/authActions";

const initialState = { users: [], loading: false, error: null };

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, users: action.payload };
    case LOGIN_USER:
      return { ...state, users: action.payload };
    case LOGOUT_USER:
      return { ...state, users: [] };
    case SET_USER:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return { ...state };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  auth: authReducer,
  books: bookReducer,
});
