import React from "react";
import Home from "./homepage/home";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../components/reducers/reducers";

const store = createStore(reducer);
export default function Main() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Home />
      </Provider>
    </React.Fragment>
  );
}
