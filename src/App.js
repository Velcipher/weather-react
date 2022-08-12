import React from "react";
import "./SearchWeather.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import SearchWeather from "./SearchWeather";

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <SearchWeather defaultCity="Kyiv" />
      </div>
    </div>
  );
}