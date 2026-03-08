import { useState, useEffect } from "react";
import getImageAndText from "../helpers/weatherCodeConverter";
import Loading from "./Loading";

//HourForecast component for displaying one hour forecast
function HourForecast({
  hours,
  conditionCode,
  temp,
  rainChance,
  isDay,
  isFullMoon,
}) {
  //Variable holding weather image and text object
  const [image, setImage] = useState(null);

  //Update image every time weather code changes
  useEffect(() => {
    setImage(getImageAndText(conditionCode));
  }, [conditionCode]);

  //Display loading if no data
  if (!image) return <p>Loading...</p>;

  return (
    //Main flex container
    <div className="flex flex-col gap-2.5 justify-center items-center [text-shadow:0_clamp(0.05rem,0.1vh,5rem)_clamp(0.05rem,0.3vh,5rem)_rgba(0,0,0,0.25)]">
      {/* Paragraph for hours */}
      <p
        className="text-[clamp(0.9rem,1vw,5rem)] whitespace-nowrap"
        style={{ fontFamily: "Roboto" }}
      >
        {hours}
      </p>

      {/* Image showing weather */}
      <div className="w-auto h-[clamp(0.1rem,5.5vh,10rem)] flex justify-center items-center">
        {/* If there is no image, display loading */}
        {!image ? (
          <Loading />
        ) : (
          <img
            src={
              isDay
                ? image.imageDay
                : isFullMoon
                  ? image.imageNightFullMoon
                  : image.imageNight
            }
            alt="I"
            className="w-full h-full"
          />
        )}
      </div>

      {/* Paragraph for temperature */}
      <p
        className="text-[clamp(1.1rem,1.3vw,5rem)]"
        style={{ fontFamily: "RobotoBold" }}
      >
        {temp}°C
      </p>

      {/* Container for rain icon and paragraph */}
      <div className="flex justify-center items-center gap-0.5">
        {/* Humidity icon */}
        <img
          src="/icons/water-drop.svg"
          alt="w"
          className="h-[clamp(0.1rem,1.8vh,10rem)] w-auto"
        />

        {/* Paragraph for humidity percent */}
        <p
          className="text-[clamp(0.8rem,0.9vw,5rem)]"
          style={{ fontFamily: "Roboto" }}
        >
          {rainChance}%
        </p>
      </div>
    </div>
  );
}

export default HourForecast;
