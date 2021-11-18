import React, { useState, useEffect } from "react";
import "./Header.css";
import Logo from "../../assets/logo.svg";

import { useNavigate } from "react-router-dom";

function Header() {
  const [is_home_active, setIsHomeActive] = useState("");
  const [is_show_active, setIsShowActive] = useState("");

  useEffect(() => {
    setIsHomeActive(window.location.pathname === "/");
    setIsShowActive(window.location.pathname === "/show");
  }, []);

  const navigate = useNavigate();

  const goTo = (e, path) => {
    e.preventDefault();

    navigate(path, { replace: true });
  };

  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Alef" />
      </div>
      <nav>
        <a
          href="/"
          onClick={(e) => goTo(e, "/")}
          className={is_home_active ? "active" : ""}
        >
          Форма
        </a>
        <a
          href="/show"
          onClick={(e) => goTo(e, "/show")}
          className={is_show_active ? "active" : ""}
        >
          Превью
        </a>
      </nav>
    </header>
  );
}

export default Header;
