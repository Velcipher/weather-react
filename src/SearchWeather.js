import React from "react";
import { useState } from "react";
import axios from "axios";
import CurWeather from "./CurrentWeather";
import CurSityData from "./CurrentInfo";
import DisplayForecast from "./Forecast";


function SearchCity(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function showWeatherData(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperatureC: Math.round(response.data.main.temp),
      temperatureF: (response.data.main.temp * 9) / 5 + 32,
      feels_like: response.data.main.feels_like,
      maxTemperature: response.data.main.temp_max,
      minTemperature: response.data.main.temp_min,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      pressure: response.data.main.pressure,
      visibility: response.data.visibility
    });
    //console.log(response.data.wind.speed);
  }

  function ShowCity(event) {
    event.preventDefault();
    searchWeatherInfo();
  }

  function searchWeatherInfo() {
    const apiKey = "982b4bc2871092f28978e82b0cbd7c0a";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeatherData);
  }

  function HandSubmit(event) {
    setCity(event.target.value);
  }
  //console.log(weatherData);
  if (weatherData.ready) {
    return (
    <div className="SearchWeather">
      
        
          <form  onSubmit={HandSubmit}>
            <div className="row" id="form">
            <div className="col-9">
            <input
              type="search" className="search"
              placeholder="Enter a city..."
              onChange={HandSubmit}
            /></div>
            <div className="col-3">
            <input
              type="submit"
              value="🔎"
              className="btn-control  btn-primary w-100"
              id="btn-submit"
              onClick={ShowCity}
            /></div></div>
          </form>
          <div className="row" id="curInfo"> 
          <div className="col-4 mt-3 ms-2" id="curWeather">
        <CurWeather data={weatherData} />
        <div className="container" id="forecast">
        </div></div>
        <div className="col-7 mb-3" id="CurrentCity">
        <CurSityData data={weatherData} />
        </div>
       </div>
          <DisplayForecast data={weatherData} />
        
      </div>
    );
  } else {
    searchWeatherInfo();
    return "Loading...";
  }
}

export default SearchCity;
