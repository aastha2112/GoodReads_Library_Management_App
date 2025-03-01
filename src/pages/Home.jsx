import { Box } from "@chakra-ui/react";
import { fetchBooks } from "../redux/actions/booksActions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookCard from "../Components/BookCard";

const Home = () => {
  const dispatch = useDispatch();

  const books = useSelector((state) => state.books.books);
  console.log(books);
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
    <Box>
      home page
      {books.map((book) => {
        return (
          <Box key={book.title}>
            <BookCard book={book} />
          </Box>
        );
      })}
    </Box>
  );
};

export default Home;
