import React, { useEffect, useState } from "react";
import { services } from "../Services/services";
import WeatherWidget from "./WeatherWidget";

export default function PageWrapper() {
  const [response, setResponse] = useState({ data: [] });
  const [city, setCity] = useState("");
  const [pos, setPos] = useState();

  useEffect(() => {
    getPosition();
  }, []);

  useEffect(() => {
    if (pos) {
      services
        .getWeatherByLatLon(pos.lat, pos.lon)
        .then((response) => response.json())
        .then((data) => {
          setResponse(data);
        });
    }
  }, [pos]);

  function setPosition(position) {
    setPos({ lat: position.coords.latitude, lon: position.coords.longitude });
  }
  function getPosition() {
    navigator.geolocation.getCurrentPosition(setPosition);
  }
  function getWeatherCity() {
    services
      .getWeatherByCityCountry(city)
      .then((response) => response.json())
      .then((data) => setResponse(data));
  }
  return (
    <div>
      <div className="controlli">
        <div>
          <input
            type="button"
            className="button"
            onClick={() => getPosition()}
            value="Posizione Attuale"
          />
        </div>
        <div>
          <input
            type="text"
            className="text"
            value={city}
            onChange={(e) => setCity(e.currentTarget.value)}
          />
          <input
            type="button"
            className="button"
            onClick={() => getWeatherCity()}
            value="Cerca"
            disabled={city.length < 3 ? true : false}
          />
        </div>
      </div>
      <WeatherWidget items={response} />
    </div>
  );
}
