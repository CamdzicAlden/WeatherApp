import AQI from "./components/AQI.jsx";
import Background from "./components/Background.jsx";
import Copyright from "./components/Copyright.jsx";
import CurrentWeather from "./components/CurrentWeather.jsx";
import Humidity from "./components/Humidity.jsx";
import MoonPhase from "./components/MoonPhase.jsx";
import SevenDayForecast from "./components/SevenDayForecast.jsx";
import SocialMedia from "./components/SocialMedia.jsx";
import SunriseSunset from "./components/SunriseSunset.jsx";
import TodaysForecast from "./components/TodaysForecast.jsx";
import UVIndex from "./components/UVIndex.jsx";
import Visibility from "./components/Visibility.jsx";
import Wind from "./components/Wind.jsx";

import {
  fetchAstronomy,
  fetchCurrentWeather,
  fetchForecast,
  fetchHistory,
} from "../api/weatherapi.js";

import { useState, useEffect } from "react";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const city = "Zenica";

  //Getting yesterday date
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  //Converting date to yyyy-mm-dd format
  const yyyy = yesterday.getFullYear();
  const mm = String(yesterday.getMonth() + 1).padStart(2, "0");
  const dd = String(yesterday.getDate()).padStart(2, "0");

  const yesterdayDate = `${yyyy}-${mm}-${dd}`;

  //useEffect runs every time city changes
  useEffect(() => {
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
          });
        })
        .catch(console.error);
    };

    fetchData();

    //Refetch API data every 3 minutes
    const intervalID = setInterval(fetchData, 180000);

    return () => clearInterval(intervalID);
  }, [city, yesterdayDate]);

  //Display loading while data is loading
  if (!weatherData) return <p>Loading...</p>;

  //Getting current day forecast from result
  const today = weatherData.forecast.forecastday[0].day;

  //Getting 2 days hour forecast
  const todaysForecast = [
    ...weatherData.forecast.forecastday[0].hour,
    ...weatherData.forecast.forecastday[1].hour,
  ];

  return (
    <>
      {/* Fixed background */}
      <Background />

      <CurrentWeather
        city="Zenica"
        weatherCode={weatherData.current.condition.code}
        isDay={weatherData.current.is_day}
        isFullMoon={
          weatherData.astronomy.moon_phase === "Full Moon" ? true : false
        }
        currentTemp={Math.round(weatherData.current.temp_c)}
        today={today}
      />

      <TodaysForecast
        todaysForecast={todaysForecast}
        isFullMoon={
          weatherData.astronomy.moon_phase === "Full Moon" ? true : false
        }
      />

      <div className="flex justify-center items-center w-[100%] h-[107dvh] my-[3%] gap-7">
        <div className="flex flex-col justify-center items-center gap-[2dvh]">
          <SevenDayForecast
            weekForecast={weatherData.forecast.forecastday}
            yesterday={weatherData.history[0].day}
          />
          <SunriseSunset
            sunrise={weatherData.astronomy.sunrise}
            sunset={weatherData.astronomy.sunset}
          />
        </div>

        <div className="flex flex-col justify-center items-center gap-[2dvh]">
          <UVIndex uvIndex={weatherData.current.uv} />
          <Humidity percent={weatherData.current.humidity} />
          <AQI index={weatherData.current.air_quality["gb-defra-index"]} />
        </div>

        <div className="flex flex-col justify-center items-center gap-[2dvh]">
          <Visibility range={weatherData.current.vis_km} />
          <Wind
            speed={weatherData.current.wind_kph}
            direction={weatherData.current.wind_dir}
          />
          <MoonPhase moonPhase={weatherData.astronomy.moon_phase} />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-2 mb-[1%] mt-[10%]">
        <SocialMedia />
        <Copyright />
      </div>
    </>
  );
}

export default App;
