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
  const [minTemp, setMinTemp] = useState(null);
  const [maxTemp, setMaxTemp] = useState(null);

  //Display loading if no data to show
  if (!weatherCode) return <p>Loading...</p>;

  //Calling custom helper method
  const currentWeather = getImageAndText(weatherCode);

  //Change min and max temp every time today changes
  useEffect(() => {
    setMinTemp(Math.round(today.mintemp_c));
    setMaxTemp(Math.round(today.maxtemp_c));
  }, [today]);

  return (
    //Main flex container
    <div className="flex flex-col justify-evenly items-center gap-5 text-[#fafafa] mt-[10%] lg:mt-[2%]">
      {/* Location tag */}
      <CityTag city={city} onClick={onCityClicked} />

      {/* Image and weather text container */}
      <div className="flex flex-col justify-center items-center gap-1.5">
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
          className={`${(isDay || isFullMoon) && currentWeather.text === "Clear" ? "w-[clamp(7rem,11vw,50rem)]" : "w-[clamp(11rem,14vw,50rem)]"} h-auto`}
        />

        {/* Paragraphs with weather text */}
        <p
          className="text-[clamp(0.1rem,4vh,10rem)] [text-shadow:0_clamp(0.1rem,0.3vh,5rem)_clamp(0.1rem,0.5vh,5rem)_rgba(0,0,0,0.25)]"
          style={{ fontFamily: "MontserratMedium" }}
        >
          {currentWeather.text}
        </p>
      </div>

      {/* Container for currentTemp and minMax temp */}
      <div className="flex flex-col justify-center items-center">
        {/* Paragraph with currentTemp*/}
        <p
          className="text-[clamp(3rem,8vh,10rem)] [text-shadow:0_clamp(0.1rem,0.2vh,5rem)_clamp(0.1rem,0.3vh,5rem)_rgba(0,0,0,0.25)]"
          style={{ fontFamily: "MontserratBold" }}
        >
          {currentTemp}°C
        </p>

        {/* Paragraph for min and max temp */}
        <p
          className="text-[clamp(0.1rem,3vh,10rem)] [text-shadow:0_clamp(0.1rem,0.3vh,5rem)_clamp(0.1rem,0.5vh,5rem)_rgba(0,0,0,0.25)]"
          style={{ fontFamily: "MontserratMedium" }}
        >
          {maxTemp}°&nbsp;&nbsp;{minTemp}°
        </p>
      </div>
    </div>
  );
}

export default CurrentWeather;
