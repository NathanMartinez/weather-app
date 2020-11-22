import React, { useContext } from "react";
import { IoMdPin } from "react-icons/io";
import { WeatherContext } from "../Context/WeatherContext";

function HeroSection() {
  const {
    name,
    weather,
    main: { temp },
    sys: { country },
  } = useContext(WeatherContext);
  return (
    <div className="HeroSection">
      <div className="heading">
        <div className="location-container">
          <IoMdPin />
          <p>
            {name}, {country}
          </p>
        </div>
        <p>℉</p>
      </div>
      <h1>{Math.round(temp)}</h1>
      <div className="weather-icons">
        {weather
          ? weather.map(({ icon, description }, i) => (
              <div key={i} className="weather-icon">
                <img
                  src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                  alt=""
                />
                <p>{description}</p>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}

export default HeroSection;
