import React from "react";

export default function DropDown({ labelText, data }) {
  return (
    <>
      <label>{labelText}</label>
      <select>
        {data.map((item) => {
          return (
            <option key={item.id} value={item.title}>
              {item.centreName + " - " + item.address}
            </option>
          );
        })}
      </select>
    </>
  );
}
