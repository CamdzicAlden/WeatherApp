import { useEffect, useState } from "react";

//Importing api fetching methods
import {
  fetchAstronomy,
  fetchCurrentWeather,
  fetchForecast,
  fetchHistory,
} from "../../api/weatherapi.js";
import getYesterdayDate from "./getYesterdayDate.js";

//Helper function for getting weatherData and loading state
export default function fetchWeather(city) {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  //Getting yesterday date
  const yesterdayDate = getYesterdayDate();

  //useEffect runs every time city changes
  useEffect(() => {
    if (!city.lat || !city.lon) return;

    setLoading(true);

    //Method calling all apis at once and waiting all of them to resolve
    const fetchData = () => {
      Promise.all([
        fetchCurrentWeather(city),
        fetchForecast(city),
        fetchAstronomy(city),
        fetchHistory(city, yesterdayDate),
      ])
        //Destructure result array
        .then(([currentData, forecastData, astronomyData, historyData]) => {
          //Update weatherData with object containing api data
          setWeatherData({
            current: currentData.current,
            forecast: forecastData.forecast,
            astronomy: astronomyData.astronomy.astro,
            history: historyData.forecast.forecastday,
            cityName: currentData.location.name,
          });
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    };

    fetchData();

    //Refetch API data every 3 minutes
    const intervalID = setInterval(fetchData, 180000);

    return () => clearInterval(intervalID);
  }, [city, yesterdayDate]);

  return { weatherData, loading };
}
