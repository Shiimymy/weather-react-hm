import React from "react";

export default function Header() {
  return (
    <div className="Header">
      <h1> Dublin </h1>
      <button type="button" id="currentLocation">
        Current Location Weather
      </button>
      <div id="todayDate"></div>
      <h2>
        {" "}
        ⛅ <br />
        <span id="todayTemp">10 / 18</span>
        °C
      </h2>
      <h6>
        Humidity : <span id="humidity">10</span> % | Wind :{" "}
        <span id="wind">2</span> km/h
      </h6>
    </div>
  );
}
