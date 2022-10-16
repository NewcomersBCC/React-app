import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../../components/Button/Button";

export default function HelperVsNC() {
  const navigate = useNavigate();
  const [authorized, setAuthorized] = useState(false);
  useEffect(() => {
    axios
      .get("/index")
      .then((res) => {
        setAuthorized(true);
        navigate("home");
      })
      .catch((err) => {
        navigate("/");
      });
  });

  return (
    <>
      {!authorized ? (
        <div>
          <Link to="/register/new-comer">
            <Button buttonLabel="New Comer"></Button>
          </Link>
          <Link to="/register/helper">
            <Button buttonLabel="Helper"></Button>
          </Link>
          <Link to="/login">
            <Button buttonLabel="Login"></Button>
          </Link>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
