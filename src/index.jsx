import React from "react";
import ReactDOM from "react-dom";
import "./styles/css/style.css";
import WeatherProvider from "./Context/WeatherContext";
import App from "./Components/App";

ReactDOM.render(
  <React.StrictMode>
    <WeatherProvider>
      <App />
    </WeatherProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
