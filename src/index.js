import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./components/App";
import reducers from "./reducers";
// Note that although we exported "combineReducers" from index.js\reducers.., we import reducers from ./reducers/index.js

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,

  document.querySelector("#root")
);
