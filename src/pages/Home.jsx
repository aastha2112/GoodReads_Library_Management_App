import { fetchBooks } from "../redux/actions/booksActions";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("home called");
    dispatch(fetchBooks());
  }, [dispatch]);

  return <div>home page</div>;
};

export default Home;
