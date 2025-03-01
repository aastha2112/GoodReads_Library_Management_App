// action constants

import { baseUrl } from "../../firebase/firebaseConfig";
import axios from "axios";

export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";
export const FETCH_BOOKS_REQUEST = "FETCH_BOOKS_REQUEST";
export const FETCH_BOOKS_FAILURE = "FETCH_BOOKS_FAILURE";

export const ADD_BOOK_TO_USER_LIST = "ADD_BOOK_TO_USER_LIST";

// action creators

export const fetchBooks = () => async (dispatch) => {
  console.log("fetch books callaed");

  try {
    dispatch({ type: FETCH_BOOKS_REQUEST });

    let res = await axios.get(`${baseUrl}/books.json`);
    console.log(res.data, "response");
    // const booksArr = Object.keys(res.data).map((key) => ({
    //   id: key,
    //   ...res.data[key],
    // }));
    dispatch({ type: FETCH_BOOKS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: FETCH_BOOKS_FAILURE });
    console.log("error fetching books", error);
  }
};
