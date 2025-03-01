import { auth } from "../firebase/firebaseConfig";
import { Box, Input, Button, Flex, Center } from "@chakra-ui/react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";

const Register = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, userEmail, userPassword).then(
      (res) => {
        console.log(res.user);
        localStorage.setItem("user", JSON.stringify(res.user));
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
    </Flex>
  );
};

export default Register;
