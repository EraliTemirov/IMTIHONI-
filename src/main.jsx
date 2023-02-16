import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import axios from "axios";

// axios
axios.defaults.baseURL = "https://nt-devconnector.onrender.com/api";
axios.defaults.headers.common["Content-Type"] = "aplication/json";

let token = localStorage.getItem("token");
if (token) axios.defaults.headers.common["x-auth-token"] = ` ${token}`;

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import { BrowserRouter as Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

// redux
import { Provider } from "react-redux";
import store from "./store/index";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Provider store={store}>
      <App />
      <ToastContainer theme="colored" />
    </Provider>
  </Router>
);
