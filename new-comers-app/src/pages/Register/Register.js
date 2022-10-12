import axios from "axios";
//import styles from "../Register/Register.module.css";
import React, { useState, useEffect } from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useParams } from "react-router-dom";
//import EsolCentre from "../data/EsolCentre.json";
import DropDown from "../../components/DropDown/DropDown";

function handleSubmition(
  firstName,
  lastName,
  email,
  password,
  option,
  selectedEsolCentre,
  centreCode
) {
  let isHelper = true;
  if (option === "new-comer") {
    isHelper = false;
    selectedEsolCentre = "";
  } else {
    isHelper = true;
  }

  //console.log(isHelper);
  const params = {
    firstName,
    lastName,
    email,
    password,
    isHelper,
    selectedEsolCentre,
    centreCode,
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
  const [centreCode, setCentreCode] = useState("");
  const [inputType, setInputType] = useState("password");
  const [dataArray, setDataArray] = useState([]);
  const [selectedEsolCentre, setSelectedEsolCentre] = useState(1);
  const [locationsFetched, setLocationsFetched] = useState(false);
  const { option } = useParams();

  useEffect(() => {
    axios
      .get("/user/register")
      .then(({ data: EsolCenters }) => {
        setDataArray(EsolCenters);
        setLocationsFetched(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
      {locationsFetched && option === "helper" && (
        <DropDown
          onChange={(e) => {
            setSelectedEsolCentre(e.target.value);
          }}
          labelText="Choose an Esol Centre"
          data={dataArray}
        />
      )}
      {locationsFetched && option === "helper" && (
        <Input
          inputType="text"
          inputLabel="Esol Centre Code:"
          onChange={(e) => {
            const centreCode = e.target.value;
            setCentreCode(centreCode);
          }}
        ></Input>
      )}

      <Button
        onClick={() => {
          handleSubmition(
            firstName,
            lastName,
            email,
            password,
            option,
            selectedEsolCentre,
            centreCode
          );
        }}
        buttonLabel="Register"
      />
    </>
  );
}
