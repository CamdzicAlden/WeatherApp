import { useState, useEffect } from "react";

//Importing components
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
import CityPopup from "./components/CityPopup.jsx";
import Loading from "./components/Loading.jsx";

//Importing method for fetching users location
import { resolveUserLocation } from "../api/locationapi.js";
import fetchWeather from "./helpers/fetchWeather.js";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [city, setCity] = useState({});
  const { weatherData, loading } = fetchWeather(city);

  //Get initial user location on load
  useEffect(() => {
    const initLocation = async () => {
      const coords = await resolveUserLocation();
      setCity(coords);
    };

    initLocation();
  }, []);

  //Disabling scrolling when popup is shown
  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showPopup]);

  //Display loading while data is loading
  if (!weatherData || loading) {
    return (
      <>
        <Background blured={true} />
        <div className="fixed inset-0 flex justify-center items-center">
          <Loading />
        </div>
      </>
    );
  }

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

      {/* Showing popup when citytag is clicked */}
      {showPopup && (
        <CityPopup
          onClose={() => setShowPopup(false)}
          onOK={(cityName) => {
            setCity(cityName);
            setShowPopup(false);
          }}
        />
      )}

      <CurrentWeather
        city={weatherData.cityName}
        weatherCode={weatherData.current.condition.code}
        isDay={weatherData.current.is_day}
        isFullMoon={
          weatherData.astronomy.moon_phase === "Full Moon" ? true : false
        }
        currentTemp={Math.round(weatherData.current.temp_c)}
        today={today}
        onCityClicked={() => setShowPopup(true)}
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
