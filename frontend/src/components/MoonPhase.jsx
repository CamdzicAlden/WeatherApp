import { useEffect, useState } from "react";
import Card from "./Card";
import moonImage from "../helpers/moonPhaseHelper";
import Loading from "./Loading";

//Component for displaying moon phase
function MoonPhase({ moonPhase, loading }) {
  const [moonImg, setMoonImg] = useState("");

  if (loading) return <p>Loading...</p>;

  //Change image every time moonPhase changes
  useEffect(() => {
    setMoonImg(moonImage(moonPhase));
  }, [moonPhase]);

  return (
    //Calling custom card component
    <Card>
      {!moonImg ? (
        <Loading />
      ) : (
        // Main flex container
        <div className="flex flex-col justify-center items-center gap-7 w-[100%] h-[100%] whitespace-nowrap">
          {/* Heading container */}
          <div className="flex justify-center items-center gap-1.5 w-[100%] h-auto ">
            {/* Moon phase icon */}
            <img
              src="/icons/moon.svg"
              alt="I"
              className="h-[clamp(0.1rem,2.6vh,10rem)] w-auto"
            />

            {/* Moon phase text */}
            <p
              className="text-[clamp(0.1rem,2.2vh,10rem)]"
              style={{ fontFamily: "MontserratMedium" }}
            >
              Moon phase
            </p>
          </div>

          {/* Moon phase image */}
          <img
            src={moonImg}
            alt="I"
            className="h-[clamp(0.1rem,12vh,10rem)] w-auto"
          />

          {/* Moon phase name */}
          <p
            className="text-[clamp(0.1rem,2vh,10rem)]"
            style={{ fontFamily: "MontserratMedium" }}
          >
            {moonPhase}
          </p>
        </div>
      )}
    </Card>
  );
}

export default MoonPhase;
