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
    <div className="flex flex-col gap-2.5 justify-center items-center [text-shadow:0_clamp(0.05rem,0.1dvh,5rem)_clamp(0.05rem,0.3dvh,5rem)_rgba(0,0,0,0.25)]">
      {/* Paragraph for hours */}
      <p
        className="text-[clamp(0.1rem,2dvh,10rem)] whitespace-nowrap"
        style={{ fontFamily: "Roboto" }}
      >
        {hours}
      </p>

      {/* Image showing weather */}
      <div className="w-[clamp(0.1rem,5.5dvw,15rem)] h-auto flex justify-center items-center shrink-0">
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
            className="w-full h-auto mt-[-15%] mb-[-20%]"
          />
        )}
      </div>

      {/* Paragraph for temperature */}
      <p
        className="text-[clamp(0.1rem,2.6dvh,10rem)]"
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
          className="h-[clamp(0.1rem,1.8dvh,10rem)] w-auto"
        />

        {/* Paragraph for humidity percent */}
        <p
          className="text-[clamp(0.1rem,1.8dvh,10rem)]"
          style={{ fontFamily: "Roboto" }}
        >
          {rainChance}%
        </p>
      </div>
    </div>
  );
}

export default HourForecast;
