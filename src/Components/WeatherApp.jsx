import React, { useState } from "react";
import "../index.css";
import Search from "../Assets/searchIcon.png";
// import Clear from "../Assets/clear.jpeg";
import Cloud from "../Assets/cloud.png";
// import Dizzle from "../Assets/dizzle.png"
import Humidity from "../Assets/humidity.jpeg";
import Rain from "../Assets/rain.png";
// import Windy from "../Assets/windy.png"
const WeatherApp = () => {
  const [city, setCity] = useState("Nigeria");
  const [temp, setTemp] = useState(35);
  const [item, setItem] = useState("");
  const [humidity, setHumidity] = useState(60);
  const handleChange = (event) => {
    setCity(event.target.value);
  };
  const api_key = "cdc062e0b056f43c593046d958bdfa6d";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${api_key}`;

  const searchWeather = async () => {
    try{
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setItem(data);
    setTemp(Math.floor(item.main.temp));
    setHumidity(item.main.humidity);
    }catch(error){  
console.error(error.message)
    }
  };
  console.log(temp)
  return (
    <div className="container">
      <div className="top-bar">
        <input
          type="text"
          className="city-input"
          placeholder="Search"
          onChange={handleChange}
        />
        <div
          className="search-icon"
          onClick={() => {
            searchWeather();
          }}
        >
          <img src={Search} alt="" className="search-img" />
        </div>
      </div>
      <div className="weather-image">
        <img src={Cloud} alt="" />
      </div>
      <div className="weather-temp">
        {temp} <sup>o</sup> c
      </div>
      <div className="weather-loc">{city}</div>
      <div className="data-container">
        <div className="data-element">
          <img src={Humidity} alt="" className="data-img" />
          <div className="data">
            <div className="temp">{humidity}%</div>
            <div className="text">humidity</div>
          </div>
        </div>
        <div className="data-element">
          <img src={Rain} alt="" className="data-img" />
          <div className="data">
            <div className="temp">40km/hr</div>
            <div className="text">Rain</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
