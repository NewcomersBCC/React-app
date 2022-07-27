import axios from "axios";
//import styles from "../Register/Register.module.css";
import React, { useState } from "react";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";

function handleSubmition(firstName, lastName, email, password) {
  const params = {
    firstName,
    lastName,
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

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputType, setInputType] = useState("password");
  return (
    <>
      <Input
        inputPlaceHolder="John"
        inputType="text"
        inputLabel="First Name:"
        onChange={(e) => {
          const firstName = e.target.value;
          setFirstName(firstName);
        }}
      ></Input>
      <Input
        inputPlaceHolder="Doe"
        inputType="text"
        inputLabel="Last Name:"
        onChange={(e) => {
          const lastName = e.target.value;
          setLastName(lastName);
        }}
      ></Input>
      <Input
        inputPlaceHolder="johndoe@example.com"
        inputType="text"
        inputLabel="Email:"
        onChange={(e) => {
          const email = e.target.value;
          setEmail(email);
        }}
      ></Input>
      <Input
        inputPlaceHolder="example123"
        inputType={inputType}
        inputLabel="Password:"
        onChange={(e) => {
          const password = e.target.value;
          setPassword(password);
        }}
      ></Input>
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
          handleSubmition(firstName, lastName, email, password);
        }}
        buttonLabel="Register"
      />
    </>
  );
}
