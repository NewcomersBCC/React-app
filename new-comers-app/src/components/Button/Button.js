import React from "react";

export default function Button({ onClick, buttonLabel }) {
  return <button onClick={onClick}>{buttonLabel}</button>;
}
