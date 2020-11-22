import React, { createContext, useState } from "react";
import TestData from "../TestData/index.json";
// Creating an initial state by using test data
let initialState = TestData;

export const WeatherContext = createContext();
export const UpdateWeatherContext = createContext();

function WeatherProvider({ children }) {
  const [data, setData] = useState(initialState);

  return (
    <WeatherContext.Provider value={data}>
      <UpdateWeatherContext.Provider value={setData}>
        {children}
      </UpdateWeatherContext.Provider>
    </WeatherContext.Provider>
  );
}

export default WeatherProvider;
