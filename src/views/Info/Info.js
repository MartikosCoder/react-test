import React from "react";
import "./Info.css";

import { useSelector } from "react-redux";

function Graph() {
  const wordByNum = (value, words) => {
    const temp_value = Math.abs(value) % 100;
    const num = temp_value % 10;

    if (temp_value > 10 && temp_value < 20) return words[2];
    if (num > 1 && num < 5) return words[1];
    if (num == 1) return words[0];
    return words[2];
  };

  const user = useSelector((state) => state.user.value);

  const Children =
    user.children.length > 0 ? (
      <div className="info__block">
        <h2>Дети</h2>
        <div className="child__list">
          {user.children.map((child) => (
            <div className="child__list__item">
              <span>{child.name}</span>
              {child.age ? (
                <span>
                  , {child.age} {wordByNum(child.age, ["год", "года", "лет"])}
                </span>
              ) : (
                <span></span>
              )}
            </div>
          ))}
        </div>
      </div>
    ) : (
      <div></div>
    );

  return (
    <main className="info__page">
      <div className="info__block">
        <h2>Персональные данные</h2>
        {user.name ? (
          <div className="user__info">
            <span>{user.name}</span>
            {user.age ? (
              <span>
                , {user.age} {wordByNum(user.age, ["год", "года", "лет"])}
              </span>
            ) : (
              <span></span>
            )}
          </div>
        ) : (
          <div className="user__info">Нет данных</div>
        )}
      </div>

      {Children}
    </main>
  );
}

export default Graph;
