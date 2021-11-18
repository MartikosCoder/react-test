import React from "react";
import "./Input.css";

function Input(props) {
  return (
    <div className="form__input">
      <input className={String(props.value).length > 0 ? "entered" : ""} type={props.type} value={props.value} onChange={e => props.setValue(e.target.value)}/>
      <label>{props.label}</label>
    </div>
  );
}

export default Input;
