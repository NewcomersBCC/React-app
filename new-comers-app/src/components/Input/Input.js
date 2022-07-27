//import styles from "../Input/Input.module.css";
import React from "react";

export default function Input({
  inputPlaceHolder,
  inputLabel,
  inputType,
  onChange,
  inputValue,
  onClick,
}) {
  return (
    <div>
      <label>
        {inputLabel}
        <input
          onClick={onClick}
          value={inputValue}
          onChange={onChange}
          placeholder={inputPlaceHolder}
          type={inputType}
        ></input>
      </label>
    </div>
  );
}
