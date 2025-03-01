import { Box, Grid } from "@chakra-ui/react";
import { fetchBooks } from "../redux/actions/booksActions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookCard from "../Components/BookCard";

const Home = () => {
  const dispatch = useDispatch();

  const books = useSelector((state) => state.books.books);
  console.log(books, "in home");
  // const booksArr = Object.keys(books).map((key) => ({
  //   id: key,
  //   ...books[key],
  // }));
  // console.log(booksArr);

  useEffect(() => {
    console.log("home called");
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <Grid gridTemplateColumns={"repeat(4,1fr)"} gap={"10px"} p={"20px"}>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </Grid>
  );
};

export default Home;
