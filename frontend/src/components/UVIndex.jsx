import { useEffect, useState } from "react";
import Card from "./Card";
import returnMessage from "../helpers/uvIndexHelper";

//Component for displaying UV index
function UVIndex({ uvIndex }) {
  const [position, setPosition] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setPosition(Math.round(uvIndex / 0.11));
    setMessage(returnMessage(Math.round(uvIndex)));
  }, [uvIndex]);

  return (
    //Custom card component
    <Card>
      {/* Heading flex container */}
      <div className="flex justify-center items-center gap-1.5 w-[100%] h-[50%] ">
        {/* Sun icon */}
        <img
          src="/icons/sun.svg"
          alt="I"
          className="h-[clamp(0.1rem,3dvh,10rem)] w-auto"
        />
        {/* UV Index text */}
        <p
          className="text-[clamp(0.1rem,2.2dvh,10rem)]"
          style={{ fontFamily: "MontserratMedium" }}
        >
          UV Index
        </p>
      </div>

      {/* Data flex container */}
      <div className="flex flex-col justify-center items-start gap-2 w-[100%] h-[50%] px-[clamp(0.1rem,2dvw,10rem)]">
        {/* Text info */}
        <p
          className="text-[clamp(0.1rem,2.5dvh,10rem)]"
          style={{ fontFamily: "RobotoBold" }}
        >
          {message}
        </p>

        {/* Progress bar */}
        <div className="relative w-[100%] h-[10%] rounded-[99999px] bg-[linear-gradient(to_right,#378917_0%,#FF8C00_33%,#9E0101_66%,#460D7E_100%)]">
          <div
            className="absolute top-1/2 -translate-y-1/2 w-[2.5dvh] h-[2.5dvh] rounded-full border-[0.3dvh] border-[#fafafa]"
            style={{ left: `${position}%`, transform: "translate (-50%)" }}
          />
        </div>
      </div>
    </Card>
  );
}

export default UVIndex;
