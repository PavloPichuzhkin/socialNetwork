import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/redux-store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

// setInterval(() => {
//   store.dispatch({ type: "FAKE" });
// }, 1000);
ReactDOM.render(
  <BrowserRouter>
    {/* <StoreContext.Provider value={store}> */}
    <Provider store={store}>
      <App
      // state={state}
      // dispatch={store.dispatch.bind(store)}
      // store={store}
      />
      {/* </StoreContext.Provider> */}
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
