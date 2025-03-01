import { Flex } from "@chakra-ui/react";
import React from "react";

const BookCard = ({ book }) => {
  return (
    <Flex>
      <img src={book.coverImage} alt={book.title} />
    </Flex>
  );
};

export default BookCard;
