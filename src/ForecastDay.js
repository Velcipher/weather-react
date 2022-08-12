import React from "react";
import WeatherIcon from "./WeatherIcon";

function ForecastDay(props) {
  function day() {
    let date = new Date(props.days.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return days[day];
  }

  function maxTemperature() {
    let temperature = Math.round(props.days.temp.max);

    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.days.temp.min);

    return `${temperature}°`;
  }

  return (
    <div>
      <h5 className="card-title">
        <strong>{day()}</strong>
      </h5>
      <div className="weatherIcon">
        <WeatherIcon code={props.days.weather[0].icon} size={42} color='white' />
      </div>
      <div className="card-body">
        <p className="card-text">
          <strong>{maxTemperature()}</strong> / {minTemperature()}
        </p>
      </div>
    </div>
  );
}
export default ForecastDay;
