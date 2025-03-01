// action constants

export const REGISTER_USER = "REGISTER_USER";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const SET_USER = "SET_USER";

// action creators

export const registerUser = (user) => (dispatch) => {
  dispatch({ type: REGISTER_USER, payload: user });
};

export const loginUser = (user) => (dispatch) => {
  dispatch({ type: LOGIN_USER, payload: user });
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT_USER });
};

export const setUser = (user) => (dispatch) => {
  dispatch({ type: SET_USER, payload: user });
};
