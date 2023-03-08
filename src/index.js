import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";
import App from "./components/app";
import reduxThunk from "redux-thunk";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

function loggerMiddleware(store) {
  return function (next) {
    return function (action) {
      const result = next(action);
      console.log("middleware", store.getState());
      return result;
    };
  };
}

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(loggerMiddleware, reduxThunk))
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
