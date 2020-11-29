import React from "react";
import ReactDOM from "react-dom";
import Home from "./homepage/home";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../components/reducers/reducers";

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
