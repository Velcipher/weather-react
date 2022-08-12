import React from "react";

export default function CurWeather(props) {
  return (
    <div className="curWeather">
      <div className="curW">
        <h2 className="curW1">Current weather</h2>
        <h5 className="curW2">{props.data.description}</h5>
        <span className="details" id="maxT">
          Feels like: {Math.round(props.data.feels_like)}°C
        </span>
        <hr />
        <span className="details" id="maxT">
          Max temperature: {Math.round(props.data.maxTemperature)}°C
        </span>
        <hr />
        <span className="details" id="minT">
          Min temperature: {Math.round(props.data.minTemperature)}°C
        </span>
        <hr />
        <span className="details" id="humidity">
          Humidity: {props.data.humidity}%
        </span>
        <hr />
        <span className="details" id="pressure">
          Pressure: {props.data.pressure}Pa
        </span>
        <hr />
        <span className="details" id="windSpeed">
          Wind: SW {props.data.wind} m/s
        </span>
        <hr />
        <span className="details" id="visibility">
          Visibility: {props.data.visibility} m
        </span>
        <hr />
      </div>
    </div>
  );
}
