import React, { useState } from "react";
import "./Main.css";

import Input from "../../components/Input/Input";
import FormChild from "../../components/FormChild/FormChild";

import { useSelector, useDispatch } from "react-redux";
import { set } from "../../store/slices/user";

import { hasError } from "../../utils/errors";

function Main() {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [children, setChildren] = useState(user.children);

  const addChild = (e) => {
    e.preventDefault();

    const temp_children = [...children];
    temp_children.push({ name: "", age: 0 });

    setChildren(temp_children);
  };
  const updateChildInfo = (index, value, field) => {
    const temp_children = [...children];

    temp_children[index][field] = value;
    setChildren(temp_children);
  };
  const removeChild = (index) => {
    const temp_children = [...children];

    temp_children.splice(index, 1);
    setChildren(temp_children);
  };

  const saveInfo = (e) => {
    e.preventDefault();

    const name_invalid = hasError(
      name,
      (e) => e.length === 0,
      "Имя пользователя не указано."
    );
    const age_invalid = hasError(age, (e) => e <= 0, "Возраст указан неверно.");
    const children_invalid = hasError(
      children,
      (e) => e.some((child) => child.name.length === 0 || child.age <= 0),
      "Информация о детях указана неверно"
    );

    if (name_invalid || age_invalid || children_invalid) return;

    dispatch(
      set({
        name,
        age,
        children,
      })
    );

    alert("Информация сохранена!");
  };

  return (
    <main className="main__page">
      <form className="user__form">
        <div className="form__header">
          <h2>Персональные данные </h2>
        </div>
        <Input label="Имя" type="text" value={name} setValue={setName} />
        <Input label="Возраст" type="number" value={age} setValue={setAge} />
      </form>
      <form className="children__form">
        <div className="form__header">
          <h2>Дети (макс. 5)</h2>

          <button
            disabled={children.length === 5 ? "disabled" : ""}
            className="add-btn"
            onClick={addChild}
          >
            Добавить ребенка
          </button>
        </div>

        {children.map((_, index) => {
          return (
            <FormChild
              child={children[index]}
              setName={(value) => updateChildInfo(index, value, "name")}
              setAge={(value) => updateChildInfo(index, value, "age")}
              remove={() => removeChild(index)}
              key={index}
            />
          );
        })}

        <button className="save-btn" onClick={saveInfo}>
          Сохранить
        </button>
      </form>
    </main>
  );
}

export default Main;
