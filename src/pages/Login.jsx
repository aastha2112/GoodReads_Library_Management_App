import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";
import { Text, Input, Button, Flex, Heading } from "@chakra-ui/react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { loginUser, setUser } from "../redux/actions/authActions";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, userEmail, userPassword).then((res) => {
      console.log(res.user);
      dispatch(loginUser(res.user));
      dispatch(setUser(res.user));
      navigate("/");
    });
  };

  return (
    <Flex
      flexDirection={"column"}
      width={"500px"}
      justifySelf={"center"}
      margin={"20px"}
      gap={"10px"}
    >
      <Heading>Login</Heading>
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
      <Button onClick={handleSignIn}>Log In</Button>
    </Flex>
  );
};

export default Login;
