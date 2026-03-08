import { useEffect, useState, useRef } from "react";
import Card from "./Card";
import { visibilityObserver } from "../helpers/visibilityObserver";

//Component for displaying humidity
function Humidity({ percent }) {
  const ref = useRef(null);
  const visible = visibilityObserver(ref);
  false;

  return (
    //Custom card component
    <Card>
      {/* Heading flex container */}
      <div className="flex justify-center items-center gap-1.5 w-[100%] h-[50%]">
        {/* Water drop icon */}
        <img
          src="/icons/water-drop.svg"
          alt="I"
          className="h-[clamp(0.1rem,3vh,10rem)] w-auto"
        />
        {/* Humidity text */}
        <p
          className="text-[clamp(0.1rem,2.2vh,10rem)]"
          style={{ fontFamily: "MontserratMedium" }}
        >
          Humidity
        </p>
      </div>

      {/* Data flex container */}
      <div className="flex flex-col justify-center items-start gap-2 w-[100%] h-[50%]">
        {/* Percent text */}
        <p
          className="text-[clamp(0.1rem,2.5vh,10rem)]"
          style={{ fontFamily: "RobotoBold" }}
        >
          {percent}%
        </p>

        {/* Progress bar */}
        <div className="w-[100%] h-[15%] bg-[#A5A5A5] rounded-full" ref={ref}>
          <div
            className="h-[100%] bg-gradient-to-r from-[#6BFEF7] to-[#217DB6] rounded-full width transition-all duration-1000 ease-out will-change-width"
            style={{ width: visible ? `${percent}%` : "0%" }}
          ></div>
        </div>
      </div>
    </Card>
  );
}

export default Humidity;
