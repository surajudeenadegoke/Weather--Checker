import React, { useState } from "react";
import "../index.css";
import Search from "../Assets/searchIcon.png";
import Clear from "../Assets/clear.jpeg";
import Cloud from "../Assets/cloud.png";
import Drizzle from "../Assets/drizzle.png";
import Humidity from "../Assets/humidity.jpeg";
import Rain from "../Assets/rain.png";
import Windy from "../Assets/windy.png"
const WeatherApp = () => {
  const [city, setCity] = useState("Nigeria");
  const [temp, setTemp] = useState(35);
  const [humidity, setHumidity] = useState(60);
  const [icon, setIcon] = useState(Clear);
  const handleChange = (event) => {
    setCity(event.target.value);
  };
  const api_key = "cdc062e0b056f43c593046d958bdfa6d";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${api_key}`;

  const searchWeather = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTemp(Math.floor(data.main.temp));
      setHumidity(data.main.humidity);
      if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
        setIcon(Clear);
      } else if (
        data.weather[0].icon === "02d" ||
        data.weather[0].icon === "02n"
      ) {
        setIcon(Cloud);
      } else if (
        data.weather[0].icon === "03d" ||
        data.weather[0].icon === "03n"
      ) {
        setIcon(Drizzle);
      } else if (
        data.weather[0].icon === "04d" ||
        data.weather[0].icon === "04n"
      ) {
        setIcon(Drizzle);
      }else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n"){
        setIcon(Rain);
      }else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n"){
        setIcon(Rain);
      }else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n"){
        setIcon(Windy);
      }else{
        setIcon(Clear);
      }
    } catch (error) {
      console.error(error.message);
    }
  };
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
        <img src={icon} alt="" />
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
