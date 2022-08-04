import { Link } from "react-router-dom";
import { React, useState } from "react";
import Button from "../components/Button/Button";

export default function HelperVsNC() {
  const [registerOption, setRegisterOption] = useState("");
  return (
    <div>
      <Link
        onClick={() => {
          setRegisterOption("new-comer");
          console.log(registerOption);
        }}
        to="new-comer/register"
      >
        <Button buttonLabel="New Comer"></Button>
      </Link>
      <Link to="helper/register">
        <Button buttonLabel="Helper"></Button>
      </Link>
    </div>
  );
}
