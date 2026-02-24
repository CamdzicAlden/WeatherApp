import { useEffect, useState } from "react";
import Card from "./Card";

//Component for displaying Wind info
function Wind({ speed, direction }) {
  const [windSpeed, setWindSpeed] = useState(0);
  const [windDirection, setWindDirection] = useState(null);

  useEffect(() => {
    setWindSpeed(speed);
  }, [speed]);

  useEffect(() => {
    const formattedDirection =
      direction.length === 3 ? direction.slice(1) : direction;
    setWindDirection(formattedDirection);
  }, [direction]);

  return (
    //Custom card component
    <Card>
      <div className="flex flex-col justify-evenly items-center gap-2 w-[100%] h-[100%] pt-[7%]">
        {/* Heading flex container */}
        <div className="flex justify-center items-center gap-1.5 w-[100%] h-auto ">
          {/* Wind icon*/}
          <img
            src="/icons/wind.svg"
            alt="I"
            className="h-[clamp(0.1rem,3dvh,10rem)] w-auto"
          />

          {/* Wind text */}
          <p
            className="text-[clamp(0.1rem,2.2dvh,10rem)]"
            style={{ fontFamily: "MontserratMedium" }}
          >
            Wind
          </p>
        </div>

        {/* Circle container */}
        <div className="relative h-[70%] w-auto mx-auto">
          {/* Circle */}
          <svg viewBox="0 0 100 100" className="w-full h-full rotate-[-90deg]">
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="rgba(217,217,217,0.5)"
              strokeWidth="9.5"
              fill="none"
            />
          </svg>

          {/* Container for absolute positioned elements */}
          <div
            className="absolute inset-0 text-[#000000] text-[clamp(0.1rem,1.5dvh,10rem)]"
            style={{ fontFamily: "MontserratMedium" }}
          >
            {/* N E S W */}
            <span className="absolute top-[5%] left-1/2 -translate-x-1/2 text-[#ff0000]">
              N
            </span>
            <span className="absolute bottom-[5%] left-1/2 -translate-x-1/2">
              S
            </span>
            <span className="absolute left-[6.5%] top-1/2 -translate-y-1/2">
              W
            </span>
            <span className="absolute right-[8%] top-1/2 -translate-y-1/2">
              E
            </span>

            {/* NE NW SW SW */}
            <span className="absolute right-[16%] top-[25%] -translate-y-1/2 text-[clamp(0.1rem,1dvh,10rem)]">
              NE
            </span>
            <span className="absolute right-[16%] bottom-[25%] translate-y-1/2 text-[clamp(0.1rem,1dvh,10rem)]">
              SE
            </span>
            <span className="absolute left-[15%] top-[25%] -translate-y-1/2 text-[clamp(0.1rem,1dvh,10rem)]">
              NW
            </span>
            <span className="absolute left-[15%] bottom-[25%] translate-y-1/2 text-[clamp(0.1rem,1dvh,10rem)]">
              SW
            </span>

            {/* Wind speed text */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center text-[#fafafa] text-[clamp(0.1rem,2dvh,10rem)]"
              style={{ fontFamily: "MontserratBold" }}
            >
              <span>{windSpeed}</span>
              <span>km/h</span>
            </div>

            {/* N E S W  direction arrows*/}
            <img
              src="/icons/DirectionArrow.svg"
              alt="I"
              className="h-[clamp(0.1rem,2dvh,10rem)] w-auto absolute top-[17%] left-1/2 -translate-x-1/2"
              style={{
                visibility: `${windDirection === "N" ? "visible" : "hidden"}`,
              }}
            />
            <img
              src="/icons/DirectionArrow.svg"
              alt="I"
              className="h-[clamp(0.1rem,2dvh,10rem)] w-auto absolute top-1/2 right-[17%] -translate-y-1/2 rotate-[90deg]"
              style={{
                visibility: `${windDirection === "E" ? "visible" : "hidden"}`,
              }}
            />
            <img
              src="/icons/DirectionArrow.svg"
              alt="I"
              className="h-[clamp(0.1rem,2dvh,10rem)] w-auto absolute top-1/2 left-[17%] -translate-y-1/2 rotate-[-90deg]"
              style={{
                visibility: `${windDirection === "S" ? "visible" : "hidden"}`,
              }}
            />
            <img
              src="/icons/DirectionArrow.svg"
              alt="I"
              className="h-[clamp(0.1rem,2dvh,10rem)] w-auto absolute bottom-[17%] left-1/2 -translate-x-1/2 rotate-[180deg]"
              style={{
                visibility: `${windDirection === "W" ? "visible" : "hidden"}`,
              }}
            />

            {/* NE NW SE SW  direction arrows*/}
            <img
              src="/icons/DirectionArrow.svg"
              alt="I"
              className="h-[clamp(0.1rem,2dvh,10rem)] w-auto absolute top-[30%] right-[25%] rotate-[45deg]"
              style={{
                visibility: `${windDirection === "NE" ? "visible" : "hidden"}`,
              }}
            />
            <img
              src="/icons/DirectionArrow.svg"
              alt="I"
              className="h-[clamp(0.1rem,2dvh,10rem)] w-auto absolute bottom-[30%] right-[25%] rotate-[135deg]"
              style={{
                visibility: `${windDirection === "SE" ? "visible" : "hidden"}`,
              }}
            />
            <img
              src="/icons/DirectionArrow.svg"
              alt="I"
              className="h-[clamp(0.1rem,2dvh,10rem)] w-auto absolute bottom-[30%] left-[25%] rotate-[225deg]"
              style={{
                visibility: `${windDirection === "SW" ? "visible" : "hidden"}`,
              }}
            />
            <img
              src="/icons/DirectionArrow.svg"
              alt="I"
              className="h-[clamp(0.1rem,2dvh,10rem)] w-auto absolute top-[30%] left-[25%] rotate-[315deg]"
              style={{
                visibility: `${windDirection === "NW" ? "visible" : "hidden"}`,
              }}
            />
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Wind;
