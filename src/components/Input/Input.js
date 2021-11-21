import React from "react";
import "./Input.css";

function Input(props) {
  const changeAction = (e) => {
    if (props.isNumber) {
      e.target.value = e.target.value
        .replace(/[^0-9]/g, "")
        .replace(/(\..*)\./g, "$1");
    }
    props.setValue(e.target.value);
  };

  return (
    <div className="form__input">
      <input
        className={String(props.value).length > 0 ? "entered" : ""}
        type={props.type}
        value={props.value}
        onChange={changeAction}
      />
      <label>{props.label}</label>
    </div>
  );
}

export default Input;
