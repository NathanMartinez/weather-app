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
      getWeatherData(inputValue, setData);
      setInputValue("");
    }
  };
  const handleClick = (e) => {
    getWeatherData(inputValue, setData);
    setInputValue("");
  };
  return (
    <div className="SearchBar">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleSubmit}
      />
      <div className="SearchBar-buttons">
        <FaSearchLocation
          className="SearchBar-icon"
          size="1.2rem"
          onClick={handleClick}
        />
        <BsThreeDotsVertical className="SearchBar-icon" size="1.2rem" />
      </div>
    </div>
  );
}

export default SearchBar;
