import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//import Button from "../../components/Button/Button";

export default function Home() {
  const [authorized, setAuthorized] = useState(false);
  let navigate = useNavigate();
  useEffect(() => {
    axios
      .get("/home")
      .then(() => {
        setAuthorized(true);
      })
      .catch((err) => {
        navigate("/login");
      });
  });

  return <>{authorized ? <h1>Home page</h1> : <></>}</>;
}
