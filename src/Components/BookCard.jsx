import { Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

const BookCard = ({ book }) => {
  return (
    <VStack>
      <img src={book.coverImage} alt={book.title} />
      <Heading>{book.title}</Heading>
      <Text>{book.author}</Text>
      <Button>Want to read</Button>
    </VStack>
  );
};

export default BookCard;
