//import styles from "../Input/Input.module.css";
import React from "react";

export default function Input({
  inputPlaceHolder,
  inputLabel,
  inputType,
  onChange,
  inputValue,
}) {
  return (
    <div>
      <label>
        {inputLabel}
        <input
          value={inputValue}
          onChange={onChange}
          placeholder={inputPlaceHolder}
          type={inputType}
        ></input>
      </label>
    </div>
  );
}
