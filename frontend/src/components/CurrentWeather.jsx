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
  maxMinTemp,
}) {
  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    setCurrentWeather(getImageAndText(weatherCode));
  }, [weatherCode, isDay, isFullMoon]);

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
        className="w-[clamp(0.1rem,15dvw,20rem)] h-auto mt-[-3%] mb-[-5%]"
      />

      {/* Paragraphs with weather information */}
      <p
        className="text-[clamp(0.1rem,4dvh,10rem)]"
        style={{ fontFamily: "MontserratMedium", fontWeight: 500 }}
      >
        {currentWeather.text}
      </p>

      <p
        className="text-[clamp(0.1rem,8dvh,10rem)]"
        style={{ fontFamily: "MontserratBold", fontWeight: 700 }}
      >
        {currentTemp}°C
      </p>

      <p
        className="text-[clamp(0.1rem,3dvh,10rem)]"
        style={{ fontFamily: "MontserratMedium", fontWeight: 500 }}
      >
        {maxMinTemp}
      </p>
    </div>
  );
}

export default CurrentWeather;
