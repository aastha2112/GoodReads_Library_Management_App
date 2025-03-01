import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex justify={"space-between"} p={"10px"}>
      <Heading>My Library</Heading>
      <Flex justify={"space-evenly"} w={"1/5"}>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/login"}>Login</NavLink>
        <NavLink to={"/register"}>Register</NavLink>
      </Flex>
    </Flex>
  );
};

export default Navbar;
