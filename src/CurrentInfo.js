import React from "react";

function CurSityData(props) {
  //console.log(props.data.city);

  //console.log(props.data.date);

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let day = days[props.data.date.getDay()];
  let hours = props.data.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = props.data.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  //console.log(props.data);

  return (
    <div className="currentInfo">
      {/* <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv_LMk7cEWfz4IcRg-MRQYDjlywPe2qONvSA&usqp=CAU"
        alt="rain"
      /> */}

      <div className="date">
        <h2 className="town">
          <strong>{props.data.city}</strong>
        </h2>

        <span id="dayOfWeek">
          {day} <br />
          {hours}:{minutes}
        </span>
      </div>
      <div className="temperature">
        <span className="temp">{props.data.temperatureC}</span>
        <span id="celsium" className="open">
          °C
        </span>
        <span id="faringate">({Math.round(props.data.temperatureF)}°F)</span>
      </div>
    </div>
  );
}
export default CurSityData;
