import { Link } from "react-router-dom";
import { React } from "react";
import Button from "../../components/Button/Button";

export default function HelperVsNC() {
  return (
    <div>
      <Link to="/register/new-comer">
        <Button buttonLabel="New Comer"></Button>
      </Link>
      <Link to="/register/helper">
        <Button buttonLabel="Helper"></Button>
      </Link>
    </div>
  );
}
