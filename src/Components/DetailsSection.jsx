import React, { useContext } from "react";
import { WeatherContext } from "../Context/WeatherContext";

function DetailsSection() {
  const data = useContext(WeatherContext);

  function getDetails() {
    const {
      coord: { lon, lat },
      main: { temp_min, temp_max, pressure, humidity },
      wind: { speed },
      clouds: { all },
    } = data;
    return {
      lon,
      lat,
      "temp min": `${Math.round(temp_min)}º`,
      "temp max": `${Math.round(temp_max)}º`,
      clouds: `${all}%`,
      humidity: `${humidity}%`,
      "wind speed": speed,
      hPa: pressure,
    };
  }
  const details = getDetails();

  return (
    <div className="DetailsSection">
      {Object.entries(details).map(([key, value], i) => {
        return (
          <div key={i} className="detail">
            <p>
              {key}: <small>{value}</small>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default DetailsSection;
