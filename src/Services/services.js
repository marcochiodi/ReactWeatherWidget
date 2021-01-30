import { globalConf } from "./global";

export const services = {
  getWeatherByLatLon(lat, lon) {
    const url = globalConf.conf.apiWeatherUrl;
    const key = globalConf.conf.apiWeatherKey;
    return fetch(
      url +
        "forecast/daily?lat=" +
        lat +
        "&lon=" +
        lon +
        "&days=7&lang=it&key=" +
        key
    );
  },

  getWeatherByCityCountry(city) {
    const url = globalConf.conf.apiWeatherUrl;
    const key = globalConf.conf.apiWeatherKey;
    return fetch(
      url +
        "forecast/daily?city=" +
        city +
        "&country=italy&days=7&lang=it&key=" +
        key
    );
  }
};
