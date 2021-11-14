import React, { useState } from "react";
import "./Main.css";

import { useSelector, useDispatch } from "react-redux";
import { add, update } from "../../store/slices/users";

import { hasError } from "../../utils/errors";

function Main() {
  const users = useSelector((state) => state.users.value);
  const dispatch = useDispatch();

  const [is_current_user, setIsCurrentUser] = useState(false);

  const [current_id, setCurrentID] = useState("");
  const [name, setName] = useState("");
  const [work, setWork] = useState(0);
  const [time, setTime] = useState(0);

  const addItem = (e) => {
    e.preventDefault();
    console.log(users);

    const has_name_error = is_current_user ? false : hasError(
      name,
      (a) => a.length === 0,
      "Необходимо заполнить имя"
    );
    const has_work_error = hasError(
      work,
      (a) => a === 0,
      "Необходимо заполнить кол-во задач"
    );
    const has_time_error = hasError(
      time,
      (a) => a === 0,
      "Необходимо заполнить время"
    );

    if (has_name_error || has_work_error || has_time_error) {
      return;
    }

    if (is_current_user) {
      dispatch(
        update({
          id: current_id,
          work: Number(work),
          time: Number(time),
        })
      );
    } else {
      dispatch(
        add({
          id: "_" + Math.random().toString(36).substr(2, 9),
          name,
          work: Number(work),
          time: Number(time),
        })
      );
    }

    setCurrentID("");
    setName("");
    setWork(0);
    setTime(0);
  };

  return (
    <main>
      <form>
        <select
          value={current_id}
          onChange={(e) => setCurrentID(e.target.value)}
          className="form-selector"
          disabled={!is_current_user}
        >
          <option value="" disabled>
            Выберите существующего пользователя
          </option>
          {users.map((user) => (
            <option value={user.id}>{user.name}</option>
          ))}
        </select>

        <section className="switcher">
          <span className="left">Новый пользователь</span>
          <label className="switch">
            <input
              type="checkbox"
              value={is_current_user}
              onClick={() => setIsCurrentUser(!is_current_user)}
            />
            <span className="slider round"></span>
          </label>
          <span className="right">Существующий пользователь</span>
        </section>

        <section className="form-inputs">
          <div className="form-group">
            <span>Введите имя: </span>
            <input
              type="text"
              required
              className="form-input"
              name="Имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={is_current_user}
            />
          </div>
          <div className="form-group">
            <span>Введите кол-во задач: </span>
            <input
              type="number"
              required
              className="form-input"
              name="Задачи"
              value={work}
              onChange={(e) => setWork(e.target.value)}
            />
          </div>
          <div className="form-group">
            <span>Введите затраченное время ( в часах ): </span>
            <input
              type="number"
              required
              className="form-input"
              name="Время"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
        </section>

        <button onClick={(e) => addItem(e)} className="form-submit">
          Добавить
        </button>
      </form>
    </main>
  );
}

export default Main;
