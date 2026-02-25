import { useState, useEffect } from "react";
import getImageAndText from "../helpers/weatherCodeConverter";

function DayForecast({ dayNum, rainChance, minTemp, maxTemp, imageCode }) {
  const [imageText, setImageText] = useState(null);

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

  useEffect(() => {
    setImageText(getImageAndText(imageCode));
  }, [imageCode]);

  if (!imageText) return <p>Loading...</p>;

  return (
    <div className="flex justify-between items-center w-[100%] h-auto">
      <p
        className="text-[clamp(0.1rem,2.2dvh,10rem)]"
        style={{ fontFamily: "MontserratMedium" }}
      >
        {weekDays[dayNum]}
      </p>

      {/* Whole right side container */}
      <div className="flex justify-center items-center gap-4">
        {/* Humidity and images container */}
        <div className="flex justify-center items-center gap-6">
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

          <img
            src={imageText.imageDay}
            alt="I"
            className="h-[clamp(0.1rem,9dvh,10rem)] w-auto m-[-10%]"
          />
          <img
            src={imageText.imageNight}
            alt="I"
            className="h-[clamp(0.1rem,9dvh,10rem)] w-auto m-[-10%]"
          />
        </div>

        <p
          className="text-[clamp(0.1rem,2dvh,10rem)]"
          style={{ fontFamily: "Montserrat" }}
        >
          {maxTemp}° {minTemp}°
        </p>
      </div>
    </div>
  );
}

export default DayForecast;
