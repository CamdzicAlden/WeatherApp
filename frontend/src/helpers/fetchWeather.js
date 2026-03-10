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

  //useEffect runs every time city changes
  useEffect(() => {
    if (!city.lat || !city.lon) return;

    //Getting yesterday date
    const yesterdayDate = getYesterdayDate();

    //Reset loading to true
    setLoading({
      weather: true,
      forecastOpenMeteo: true,
    });

    //Calling fetchWeatherData method
    fetchWeatherData(city, yesterdayDate)
      .then((currentData) => {
        //Update weather data
        setWeatherData((prev) => ({ ...prev, ...currentData }));
        //Update loading
        setLoading((prev) => ({ ...prev, weather: false }));
      })
      .catch((err) => {
        console.error(err);
        setLoading((prev) => ({ ...prev, weather: false }));
      });

    //Calling fetchForecastOpenMeteo method
    fetchForecastOpenMeteo(city)
      .then((forecastDataOpenMeteo) => {
        //Update weather
        setWeatherData((prev) => ({
          ...prev,
          forecastOpenMeteo: forecastDataOpenMeteo.daily,
        }));

        //Update loading
        setLoading((prev) => ({ ...prev, forecastOpenMeteo: false }));
      })
      .catch((err) => {
        console.error(err);
        setLoading((prev) => ({ ...prev, forecastOpenMeteo: false }));
      });
  }, [city]);

  return { weatherData, loading };
}
