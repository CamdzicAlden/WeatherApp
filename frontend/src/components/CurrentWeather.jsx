import { useEffect, useState } from "react";
import CityTag from "./CityTag.jsx";
import getImageAndText from "../helpers/weatherCodeConverter.js";

//CurrentWeather component for displaying weather at the moment
function CurrentWeather({
  city,
  weatherCode,
  isDay,
  isFullMoon,
  currentTemp,
  today,
}) {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [minTemp, setMinTemp] = useState(null);
  const [maxTemp, setMaxTemp] = useState(null);

  useEffect(() => {
    setCurrentWeather(getImageAndText(weatherCode));
  }, [weatherCode, isDay, isFullMoon]);

  useEffect(() => {
    setMinTemp(Math.round(today.mintemp_c));
    setMaxTemp(Math.round(today.maxtemp_c));
  }, [today]);

  if (!currentWeather) return <p>Loading...</p>;

  return (
    //Main flex container
    <div className="flex flex-col justify-evenly items-center gap-4 text-[#fafafa] mt-[2%]">
      {/* Location tag */}
      <CityTag city={city} />

      {/* Current weather image */}
      <img
        src={
          isDay
            ? currentWeather.imageDay
            : isFullMoon
              ? currentWeather.imageNightFullMoon
              : currentWeather.imageNight
        }
        alt="I"
        className="w-[clamp(0.1rem,20dvw,20rem)] h-auto mt-[-5%] mb-[-6%]"
      />

      {/* Paragraphs with weather information */}
      <p
        className="text-[clamp(0.1rem,4dvh,10rem)]"
        style={{ fontFamily: "MontserratMedium" }}
      >
        {currentWeather.text}
      </p>

      <div className="flex flex-col justify-center items-center">
        <p
          className="text-[clamp(0.1rem,8dvh,10rem)]"
          style={{ fontFamily: "MontserratBold" }}
        >
          {currentTemp}°C
        </p>

        <p
          className="text-[clamp(0.1rem,3dvh,10rem)]"
          style={{ fontFamily: "MontserratMedium" }}
        >
          {maxTemp}°&nbsp;&nbsp;{minTemp}°
        </p>
      </div>
    </div>
  );
}

export default CurrentWeather;
