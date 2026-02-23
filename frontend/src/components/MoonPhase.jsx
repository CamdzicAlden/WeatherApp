import { useEffect, useState } from "react";
import Card from "./Card";
import moonImage from "../helpers/moonPhaseHelper";

//Component for displaying moon phase
function MoonPhase({ moonPhase }) {
  const [moonImg, setMoonImg] = useState("");

  useEffect(() => {
    setMoonImg(moonImage(moonPhase));
  }, [moonPhase]);

  if (!moonImg) return <p>Loading...</p>;

  return (
    //Calling custom card component
    <Card>
      {/* Main flex container */}
      <div className="flex flex-col justify-center items-center gap-7 w-[100%] h-[100%] px-[clamp(0.1rem,2dvw,10rem)]">
        {/* Heading container */}
        <div className="flex justify-center items-center gap-1.5 w-[100%] h-auto ">
          {/* Moon phase icon */}
          <img
            src="/icons/moon.svg"
            alt="I"
            className="h-[clamp(0.1rem,2.6dvh,10rem)] w-auto"
          />

          {/* Moon phase text */}
          <p
            className="text-[clamp(0.1rem,2.2dvh,10rem)]"
            style={{ fontFamily: "MontserratMedium" }}
          >
            Moon phase
          </p>
        </div>

        {/* Moon phase image */}
        <img
          src={moonImg}
          alt="I"
          className="h-[clamp(0.1rem,12dvh,10rem)] w-auto"
        />

        {/* Moon phase name */}
        <p
          className="text-[clamp(0.1rem,2dvh,10rem)]"
          style={{ fontFamily: "MontserratMedium" }}
        >
          {moonPhase}
        </p>
      </div>
    </Card>
  );
}

export default MoonPhase;
