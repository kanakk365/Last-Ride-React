import React from "react";

function CommonInput({ label, name, value, placeholder, onChange, id ,type }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type ||"text"}
        name={name}
        placeholder={placeholder || "Enter a value"}
        value={value}
        onChange={onChange}
        id={id}
      />
    </div>
  );
}

export default CommonInput;
