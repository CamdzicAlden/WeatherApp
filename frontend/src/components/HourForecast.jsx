import { useState, useEffect } from "react";
import getImageAndText from "../helpers/weatherCodeConverter";

//HourForecast component for displaying one hour forecast
function HourForecast({
  hours,
  conditionCode,
  temp,
  humidity,
  isDay,
  isFullMoon,
}) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    setImage(getImageAndText(conditionCode));
  }, [conditionCode]);

  if (!image) return <p>Loading...</p>;

  return (
    //Main flex container
    <div className="flex flex-col gap-2.5 justify-center items-center">
      {/* Paragraph for hours */}
      <p
        className="text-[clamp(0.1rem,2dvh,10rem)] whitespace-nowrap"
        style={{ fontFamily: "Roboto" }}
      >
        {hours}
      </p>

      {/* Image showing weather */}
      <img
        src={
          isDay
            ? image.imageDay
            : isFullMoon
              ? image.imageNightFullMoon
              : image.imageNight
        }
        alt="I"
        className="w-[clamp(0.1rem,8dvw,10rem)] h-auto mt-[-20%] mb-[-25%] ml-[-15%]"
      />

      {/* Paragraph for temperature */}
      <p
        className="text-[clamp(0.1rem,2.6dvh,10rem)]"
        style={{ fontFamily: "RobotoBold" }}
      >
        {temp}°C
      </p>

      {/* Container for humidity icon and paragraph */}
      <div className="flex justify-center items-center gap-0.5">
        {/* Humidity icon */}
        <img
          src="/icons/water-drop.svg"
          alt="w"
          className="h-[clamp(0.1rem,1.8dvh,10rem)] w-auto"
        />

        {/* Paragraph for humidity percent */}
        <p
          className="text-[clamp(0.1rem,1.8dvh,10rem)]"
          style={{ fontFamily: "Roboto" }}
        >
          {humidity}%
        </p>
      </div>
    </div>
  );
}

export default HourForecast;
