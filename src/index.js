import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import reducer from "./reducers";
// Note that although we exported "combineReducers" from index.js\reducers.., we import reducers from ./reducers/index.js

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//Don't forget the double underscores before "__REDUX" and after "COMPOSE__"

const store = createStore(reducer, composeEnhancers(applyMiddleware(reduxThunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,

  document.querySelector("#root")
);
