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
    <div className="flex justify-between items-center w-[100%] h-auto [text-shadow:0_clamp(0.05rem,0.2dvh,5rem)_clamp(0.05rem,0.3dvh,5rem)_rgba(0,0,0,0.25)] mb-[-2%]">
      {/* Weekday text */}
      <p
        className="text-[clamp(0.1rem,2.2dvh,10rem)]"
        style={{ fontFamily: "MontserratMedium" }}
      >
        {weekDays[dayNum]}
      </p>

      {/* Whole right side container */}
      <div className="flex justify-between items-center w-[60%]">
        {/* Humidity and images container */}
        <div className="flex justify-between items-center w-[60%]">
          {/* Humidity container */}
          <div className="flex justify-center items-center gap-0.5">
            {/* Water drop image */}
            <img
              src="/icons/water-drop.svg"
              alt="I"
              className="h-[clamp(0.1rem,1.7dvh,10rem)]"
            />

            <p
              className="text-[clamp(0.1rem,1.7dvh,10rem)]"
              style={{ fontFamily: "Roboto" }}
            >
              {rainChance}%
            </p>
          </div>

          <div className="flex justify-center items-center">
            <div className="flex items-center justify-center h-[8dvh] w-[8dvh] ">
              <img
                src={imageText.imageDay}
                alt="Day Icon"
                className="h-full w-full object-contain object-center"
              />
            </div>

            <div className="flex items-center justify-center h-[8dvh] w-[8dvh]">
              <img
                src={imageText.imageNight}
                alt="Night Icon"
                className="h-full w-full object-contain object-center"
              />
            </div>
          </div>
        </div>

        <p
          className="text-[clamp(0.1rem,2dvh,10rem)] w-[20%]"
          style={{ fontFamily: "Montserrat" }}
        >
          {maxTemp}° {minTemp}°
        </p>
      </div>
    </div>
  );
}

export default DayForecast;
