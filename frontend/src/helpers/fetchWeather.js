import { useEffect, useState } from "react";

//Importing api fetching methods
import {
  fetchForecastOpenMeteo,
  fetchWeatherData,
} from "../../api/weatherapi.js";

import getYesterdayDate from "./getYesterdayDate.js";

//Helper function for getting weatherData and loading state
export default function fetchWeather(city) {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState({
    weather: true,
    forecastOpenMeteo: true,
  });

  //Getting yesterday date
  const yesterdayDate = getYesterdayDate();

  //useEffect runs every time city changes
  useEffect(() => {
    if (!city.lat || !city.lon) return;

    setLoading({
      weather: true,
      forecastOpenMeteo: true,
    });

    // --- CURRENT WEATHER FIRST ---
    fetchWeatherData(city, yesterdayDate)
      .then((currentData) => {
        setWeatherData((prev) => ({ ...prev, ...currentData }));
        setLoading((prev) => ({ ...prev, weather: false }));
      })
      .catch((err) => {
        console.error(err);
        setLoading((prev) => ({ ...prev, weather: false }));
      });

    fetchForecastOpenMeteo(city)
      .then((forecastDataOpenMeteo) => {
        setWeatherData((prev) => ({
          ...prev,
          forecastOpenMeteo: forecastDataOpenMeteo.daily,
        }));
        setLoading((prev) => ({ ...prev, forecastOpenMeteo: false }));
      })
      .catch((err) => {
        console.error(err);
        setLoading((prev) => ({ ...prev, forecastOpenMeteo: false }));
      });
  }, [city]);

  return { weatherData, loading };
}
