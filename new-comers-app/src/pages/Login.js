import React, { useState } from "react";
import axios from "axios";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";

function handleLogin(email, password) {
  const params = {
    email,
    password,
  };
  axios
    .post("/user/register", params)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputType, setInputType] = useState("password");
  return (
    <div>
      <Input
        onChange={(e) => {
          const email = e.target.value;
          setEmail(email);
        }}
        inputLabel="Email"
        inputType="text"
        inputPlaceHolder="johndoe@example.com"
      />
      <Input
        onChange={(e) => {
          const password = e.target.value;
          setPassword(password);
        }}
        inputLabel="Password"
        inputType={inputType}
        inputPlaceHolder="example1234"
      />
      <Input
        inputType="checkbox"
        onClick={() => {
          inputType === "password"
            ? setInputType("text")
            : setInputType("password");
        }}
      ></Input>
      <Button
        onClick={() => {
          handleLogin(email, password);
        }}
        buttonLabel="Login"
      />
    </div>
  );
}
