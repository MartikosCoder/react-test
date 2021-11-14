import React, { useState } from "react";
import "./Header.css";

import { useNavigate } from "react-router-dom";

function Header() {
  const [is_home_active] = useState(window.location.pathname === '/');
  const [is_show_active] = useState(window.location.pathname === '/show');

  const navigate = useNavigate();

  const goTo = (e, path) => {
    e.preventDefault();

    navigate(path, {replace: true});
  }

  return (
    <header>
        <a href="/" onClick={e => goTo(e, '/')} className={is_home_active ? "active" : ""}>Главная</a>
        <a href="/show" onClick={e => goTo(e, '/show')} className={is_show_active ? "active" : ""}>График</a>
    </header>
  );
}

export default Header;
