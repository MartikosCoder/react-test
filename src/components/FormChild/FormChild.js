import React from "react";
import "./FormChild.css";

import Input from "../Input/Input";

function FormChild(props) {
    const removeAction = e => {
        e.preventDefault();
        props.remove();
    }

  return (
    <div className="child__block">
      <Input label="Имя" type="text" value={props.child.name} setValue={props.setName}/>
      <Input label="Возраст" type="number" value={props.child.age} setValue={props.setAge} />
      <button onClick={removeAction}>Удалить</button>
    </div>
  );
}

export default FormChild;
