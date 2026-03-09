import { useState, useEffect } from "react";
import getImageAndText from "../helpers/weatherCodeConverter";

//Component for displaying singe day forecast
function DayForecast({ dayNum, rainChance, minTemp, maxTemp, imageCode }) {
  //Variable holding weather image and text
  const [imageText, setImageText] = useState(null);

  //Mapping day numbers and names
  const weekDays = {
    0: "Sun",
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thu",
    5: "Fri",
    6: "Sat",
    7: "Today",
    8: "Yesterday",
  };

  //Update imageText every time imageCode changes
  useEffect(() => {
    setImageText(getImageAndText(imageCode));
  }, [imageCode]);

  //Display loading if no data to show
  if (!imageText) return <p>Loading...</p>;

  return (
    //Main flex container
    <div className="flex justify-between items-center w-full h-auto [text-shadow:0_clamp(0.05rem,0.2vh,5rem)_clamp(0.05rem,0.3vh,5rem)_rgba(0,0,0,0.25)] my-[1.5%]">
      {/* Weekday text */}
      <p
        className="text-[clamp(0.9rem,1vw,5rem)]"
        style={{ fontFamily: "MontserratMedium" }}
      >
        {weekDays[dayNum]}
      </p>

      {/* Whole right side container */}
      <div className="flex justify-between items-center w-[65%] lg:w-[50%]">
        {/* Humidity and images container */}
        <div className="flex justify-between items-center w-[65%] lg:w-[60%] gap-3">
          {/* Humidity container */}
          <div className="flex justify-center items-center gap-0.5">
            {/* Water drop image */}
            <img
              src="/icons/water-drop.svg"
              alt="I"
              className="h-[clamp(0.1rem,1.7vh,10rem)]"
            />

            <p
              className="text-[clamp(0.7rem,0.9vw,5rem)]"
              style={{ fontFamily: "Roboto" }}
            >
              {rainChance}%
            </p>
          </div>

          <div className="flex justify-center items-center gap-2">
            <img
              src={imageText.imageDay}
              alt="Day Icon"
              className="w-[clamp(2rem,2.4vw,10rem)] h-auto"
            />

            <img
              src={imageText.imageNight}
              alt="Night Icon"
              className="w-[clamp(2rem,2.4vw,10rem)] h-auto"
            />
          </div>
        </div>

        <p
          className="whitespace-nowrap text-[clamp(0.9rem,1vw,5rem)] w-[20%]"
          style={{ fontFamily: "Montserrat" }}
        >
          {maxTemp}° {minTemp}°
        </p>
      </div>
    </div>
  );
}

export default DayForecast;
