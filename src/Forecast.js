import React, { useState, useEffect } from "react";
import axios from "axios";
import './Forecast.css'
import ForecastDay from "./ForecastDay";

function DisplayForecast(props) {
  const [forecast, setForecast] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [props.data.coordinates]);

  function ForecastResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
    <div className="Forecast row" id="for">
      
        {forecast.map(function (day, index) {
          if (index < 5) {
            return (
              <div className="card" key={index}>
                <ForecastDay days={day} data={forecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
      
    );
  } else {
    let apiKey = "982b4bc2871092f28978e82b0cbd7c0a";
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.data.coordinates.lat}&lon=${props.data.coordinates.lon}&appid=${apiKey}&units=metric`;

    axios.get(url).then(ForecastResponse);

    return null;
  }
}
//console.log(props.data.coordinates);

export default DisplayForecast;
