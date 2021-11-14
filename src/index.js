import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./views/Main/Main";
import Graph from "./views/Graph/Graph";
import Header from "./components/Header/Header";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./store/index";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/show" exact element={<Graph />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
