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
  onCityClicked,
}) {
  //Variable holding object with weather condition text & images
  const [currentWeather, setCurrentWeather] = useState(null);
  const [minTemp, setMinTemp] = useState(null);
  const [maxTemp, setMaxTemp] = useState(null);

  //Change current weather everytime weatherCode, day/night or fullMoon phase changes
  useEffect(() => {
    //Calling custom helper method
    setCurrentWeather(getImageAndText(weatherCode));
  }, [weatherCode, isDay, isFullMoon]);

  //Change min and max temp every time today changes
  useEffect(() => {
    setMinTemp(Math.round(today.mintemp_c));
    setMaxTemp(Math.round(today.maxtemp_c));
  }, [today]);

  //Display loading if no data to show
  if (!currentWeather) return <p>Loading...</p>;

  return (
    //Main flex container
    <div className="flex flex-col justify-evenly items-center gap-3 text-[#fafafa] mt-[2%]">
      {/* Location tag */}
      <CityTag city={city} onClick={onCityClicked} />

      {/* Current weather image */}
      <img
        //Conditionally set src attribute
        src={
          isDay
            ? currentWeather.imageDay
            : isFullMoon
              ? currentWeather.imageNightFullMoon
              : currentWeather.imageNight
        }
        alt="I"
        className={"w-[clamp(0.1rem,20dvw,20rem)] h-auto mb-[-6%]"}
        style={{
          marginTop: `${
            isDay
              ? currentWeather.marginTopDay
              : isFullMoon
                ? currentWeather.marginTopNightFullMoon
                : currentWeather.marginTopNight
          }%`,
          marginLeft: `${
            isDay
              ? currentWeather.marginLeftDay
              : isFullMoon
                ? currentWeather.marginLeftNightFullMoon
                : currentWeather.marginLeftNight
          }%`,
          marginBottom: `${currentWeather.marginBottom}%`,
        }}
      />

      {/* Paragraphs with weather text */}
      <p
        className="text-[clamp(0.1rem,4dvh,10rem)]"
        style={{ fontFamily: "MontserratMedium" }}
      >
        {currentWeather.text}
      </p>

      {/* Container for currentTemp and minMax temp */}
      <div className="flex flex-col justify-center items-center">
        {/* Paragraph with currentTemp*/}
        <p
          className="text-[clamp(0.1rem,8dvh,10rem)]"
          style={{ fontFamily: "MontserratBold" }}
        >
          {currentTemp}°C
        </p>

        {/* Paragraph for min and max temp */}
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
