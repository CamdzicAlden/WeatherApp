import { useEffect, useState } from "react";
import Card from "./Card";

//Component for displaying Wind info
function Wind({ speed, direction }) {
  const [windSpeed, setWindSpeed] = useState(0);
  const [windDirection, setWindDirection] = useState(null);

  //Change wind speed every time speed changes
  useEffect(() => {
    setWindSpeed(speed);
  }, [speed]);

  //Change wind direction every time direction changes
  useEffect(() => {
    //If direction has 3 letters, take only last two
    const formattedDirection =
      direction.length === 3 ? direction.slice(1) : direction;
    setWindDirection(formattedDirection);
  }, [direction]);

  return (
    //Custom card component
    <Card>
      <div className="flex flex-col justify-evenly items-center w-[100%] h-[100%] pt-[7%]">
        {/* Heading flex container */}
        <div className="flex justify-center items-center gap-1.5 w-[100%] h-auto ">
          {/* Wind icon*/}
          <img
            src="/icons/wind.svg"
            alt="I"
            className="h-[clamp(0.1rem,3vh,10rem)] w-auto"
          />

          {/* Wind text */}
          <p
            className="text-[clamp(0.1rem,2.2vh,10rem)]"
            style={{ fontFamily: "MontserratMedium" }}
          >
            Wind
          </p>
        </div>

        {/* Circle container */}
        <div className="relative max-h-[85%] max-w-[95%] h-auto  w-auto flex justify-center items-center">
          {/* Circle */}
          <img
            src="/images/Compas.svg"
            alt="I"
            className="max-w-[100%] max-h-[100%] w-auto h-auto"
          />

          {/* Wind speed text */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center text-[#fafafa] text-[clamp(0.8rem,1vw,10rem)]"
            style={{ fontFamily: "MontserratBold" }}
          >
            <span>{windSpeed}</span>
            <span>km/h</span>
          </div>

          {/* N E S W  direction arrows*/}
          <img
            src="/icons/DirectionArrow.svg"
            alt="I"
            className=" h-[clamp(0.0.8rem,1vw,10rem)]w-auto absolute top-[17%] left-1/2 -translate-x-1/2"
            style={{
              visibility: `${windDirection === "N" ? "visible" : "hidden"}`,
            }}
          />
          <img
            src="/icons/DirectionArrow.svg"
            alt="I"
            className="h-[clamp(0.0.8rem,1vw,10rem)] w-auto absolute top-1/2 right-[17%] -translate-y-1/2 rotate-[90deg]"
            style={{
              visibility: `${windDirection === "E" ? "visible" : "hidden"}`,
            }}
          />
          <img
            src="/icons/DirectionArrow.svg"
            alt="I"
            className="h-[clamp(0.0.8rem,1vw,10rem)] w-auto absolute top-1/2 left-[17%] -translate-y-1/2 rotate-[-90deg]"
            style={{
              visibility: `${windDirection === "W" ? "visible" : "hidden"}`,
            }}
          />
          <img
            src="/icons/DirectionArrow.svg"
            alt="I"
            className="h-[clamp(0.0.8rem,1vw,10rem)] w-auto absolute bottom-[17%] left-1/2 -translate-x-1/2 rotate-[180deg]"
            style={{
              visibility: `${windDirection === "S" ? "visible" : "hidden"}`,
            }}
          />

          {/* NE NW SE SW  direction arrows*/}
          <img
            src="/icons/DirectionArrow.svg"
            alt="I"
            className="h-[clamp(0.0.8rem,1vw,10rem)] w-auto absolute top-[25%] right-[22%] rotate-[45deg]"
            style={{
              visibility: `${windDirection === "NE" ? "visible" : "hidden"}`,
            }}
          />
          <img
            src="/icons/DirectionArrow.svg"
            alt="I"
            className="h-[clamp(0.8rem,1vw,10rem)] w-auto absolute bottom-[25%] right-[22%] rotate-[135deg]"
            style={{
              visibility: `${windDirection === "SE" ? "visible" : "hidden"}`,
            }}
          />
          <img
            src="/icons/DirectionArrow.svg"
            alt="I"
            className="h-[clamp(0.8rem,1vw,10rem)] w-auto absolute bottom-[25%] left-[22%] rotate-[225deg]"
            style={{
              visibility: `${windDirection === "SW" ? "visible" : "hidden"}`,
            }}
          />
          <img
            src="/icons/DirectionArrow.svg"
            alt="I"
            className="h-[clamp(0.8rem,1vw,10rem)] w-auto absolute top-[25%] left-[22%] rotate-[315deg]"
            style={{
              visibility: `${windDirection === "NW" ? "visible" : "hidden"}`,
            }}
          />
        </div>
      </div>
    </Card>
  );
}

export default Wind;
