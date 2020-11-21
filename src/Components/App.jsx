import React, { useState } from "react";
import getWeatherData from "../Context/getWeatherData";

function App() {
  const [value, setValue] = useState("");
  const [data, setData] = useState({});

  const handleChange = (e) => {
    let { value } = e.target;
    setValue(value);
  };

  return (
    <div className="App">
      <input type="text" value={value} onChange={handleChange} />
      <button type="button" onClick={() => getWeatherData(value, setData)}>
        Click Me!
      </button>
    </div>
  );
}

export default App;
