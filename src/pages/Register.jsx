import { loginUser, registerUser, setUser } from "../redux/actions/authActions";
import { auth } from "../firebase/firebaseConfig";
import { Text, Input, Button, Flex, Heading } from "@chakra-ui/react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const dispatch = useDispatch();
  const user = localStorage.getItem("user");
  const navigate = useNavigate();

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, userEmail, userPassword).then(
      (res) => {
        console.log(res.user);

        dispatch(registerUser(res.user));
        dispatch(setUser(res.user));
        navigate("/");
      }
    );
  };

  return (
    <Flex
      flexDirection={"column"}
      width={"500px"}
      justifySelf={"center"}
      margin={"20px"}
      gap={"10px"}
    >
      <Heading>Register</Heading>
      <Input
        type="email"
        placeholder="Email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
        required
      />
      <Input
        type="password"
        placeholder="Password"
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
        required
      />
      <Button onClick={handleSignUp}>Sign Up</Button>

      {user && <Text color={"red"}>Sign up successful!</Text>}
    </Flex>
  );
};

export default Register;
