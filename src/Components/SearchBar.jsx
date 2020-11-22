import React, { useState, useContext } from "react";
import getWeatherData from "../APICalls/getWeatherData";
import { UpdateWeatherContext } from "../Context/WeatherContext";
import { FaSearchLocation } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

function SearchBar() {
  const setData = useContext(UpdateWeatherContext);
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => setInputValue(e.target.value);
  const handleSubmit = (e) => {
    if (e.code === "Enter") {
      // getWeatherData(inputValue, setData);
      setInputValue("");
    }
  };
  return (
    <div className="SearchBar">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleSubmit}
      />
      <FaSearchLocation />
      <BsThreeDotsVertical />
    </div>
  );
}

export default SearchBar;
