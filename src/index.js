import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./views/Main/Main";
import Info from "./views/Info/Info";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import reportWebVitals from "./reportWebVitals";
import { HashRouter, Routes, Route } from "react-router-dom";
import { store } from "./store/index";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/show" exact element={<Info />} />
        </Routes>
        <Footer />
      </HashRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
