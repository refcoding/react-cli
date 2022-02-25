import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { Provider } from 'react-redux';
import { store } from "./redux/store";
import { ReduxDemo } from "./screen/redux_demo/Index";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReduxDemo />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
