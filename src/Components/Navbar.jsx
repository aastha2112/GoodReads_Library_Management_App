import { logout } from "../redux/actions/authActions";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.auth.users);
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("user");
  };

  return (
    <Flex justify={"space-between"} alignItems={"center"} p={"10px"}>
      <Heading>My Library</Heading>
      <Flex
        justify={"space-evenly"}
        w={"1/5"}
        gap={"10px"}
        alignItems={"center"}
      >
        <NavLink to={"/"}>Home</NavLink>

        {user ? (
          <Flex gap={"10px"} alignItems={"center"}>
            <Text>{user.email}</Text>
            <Button onClick={handleLogout}>Logout </Button>
          </Flex>
        ) : (
          <>
            {" "}
            <NavLink to={"/login"}>Login</NavLink>
            <NavLink to={"/register"}>Register</NavLink>{" "}
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default Navbar;
