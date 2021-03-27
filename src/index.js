import React from "react";
import ReactDOM from "react-dom";

// Components
import Header from "./components/Header";
import Banner from "./components/home/Banner";
import TipBar from "./components/home/TipBar";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Banner />
    <TipBar />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
