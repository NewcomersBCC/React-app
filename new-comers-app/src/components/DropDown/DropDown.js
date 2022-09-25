import React from "react";

export default function DropDown({ onChange, labelText, data }) {
  return (
    <>
      <label>{labelText}</label>
      <select onChange={onChange}>
        {data.map((item) => {
          return (
            <option key={item.id} value={item.id}>
              {item.centreName + " - " + item.address}
            </option>
          );
        })}
      </select>
    </>
  );
}
