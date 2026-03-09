import { useEffect, useState } from "react";

//Importing api fetching methods
import {
  fetchAstronomy,
  fetchCurrentWeather,
  fetchForecast,
  fetchForecastOpenMeteo,
  fetchHistory,
} from "../../api/weatherapi.js";

import getYesterdayDate from "./getYesterdayDate.js";

//Helper function for getting weatherData and loading state
export default function fetchWeather(city) {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState({
    current: true,
    forecast: true,
    forecastOpenMeteo: true,
    astronomy: true,
    history: true,
  });

  //Getting yesterday date
  const yesterdayDate = getYesterdayDate();

  //useEffect runs every time city changes
  useEffect(() => {
    if (!city.lat || !city.lon) return;

    // --- CURRENT WEATHER FIRST ---
    fetchCurrentWeather(city)
      .then((currentData) => {
        setWeatherData((prev) => ({
          ...prev,
          current: currentData.current,
          cityName: currentData.location.name,
        }));
        setLoading((prev) => ({ ...prev, current: false }));
      })
      .catch((err) => {
        console.error(err);
        setLoading((prev) => ({ ...prev, current: false }));
      });

    // --- OTHER DATA IN PARALLEL ---
    fetchForecast(city)
      .then((forecastData) => {
        setWeatherData((prev) => ({
          ...prev,
          forecast: forecastData.forecast,
        }));
        setLoading((prev) => ({ ...prev, forecast: false }));
      })
      .catch((err) => {
        console.error(err);
        setLoading((prev) => ({ ...prev, forecast: false }));
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

    fetchAstronomy(city)
      .then((astronomyData) => {
        setWeatherData((prev) => ({
          ...prev,
          astronomy: astronomyData.astronomy.astro,
        }));
        setLoading((prev) => ({ ...prev, astronomy: false }));
      })
      .catch((err) => {
        console.error(err);
        setLoading((prev) => ({ ...prev, astronomy: false }));
      });

    fetchHistory(city, yesterdayDate)
      .then((historyData) => {
        setWeatherData((prev) => ({
          ...prev,
          history: historyData.forecast.forecastday,
        }));
        setLoading((prev) => ({ ...prev, history: false }));
      })
      .catch((err) => {
        console.error(err);
        setLoading((prev) => ({ ...prev, history: false }));
      });
  }, [city, yesterdayDate]);

  return { weatherData, loading };
}
