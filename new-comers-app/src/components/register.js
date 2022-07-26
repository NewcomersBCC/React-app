import axios from "axios";
import React, { useState } from "react";

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

  return (
    <>
      <label>
        First Name:
        <input
          onChange={(e) => {
            const firstName = e.target.value;
            setFirstName(firstName);
          }}
          type="text"
          name="firstName"
        />
      </label>
      <label>
        Last Name:
        <input
          onChange={(e) => {
            const lastName = e.target.value;
            setLastName(lastName);
          }}
          type="text"
          name="lastName"
        />
      </label>
      <label>
        Email:
        <input
          onChange={(e) => {
            const email = e.target.value;
            setEmail(email);
          }}
          type="text"
          name="email"
        />
      </label>
      <label>
        Password:
        <input
          onChange={(e) => {
            const password = e.target.value;
            setPassword(password);
          }}
          type="text"
          name="password"
        />
      </label>
      <input
        type="submit"
        value="Create Account"
        onClick={() => {
          handleSubmition(firstName, lastName, email, password);
        }}
      />
    </>
  );
}
