import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/Store/Store";
import { Provider } from "react-redux";
import ContextApi from "./Components/Context/ContextApi";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <ContextApi>
          <App />
        </ContextApi>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
