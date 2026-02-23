import getAQI from "../helpers/aqiHelper";
import Card from "./Card";

//Component for displaying air quality index
function AQI({ index }) {
  return (
    //Custom card
    <Card>
      {/* Main flex container */}
      <div className="flex flex-col justify-evenly items-start gap-10 w-[100%] h-[100%] px-[clamp(0.1rem,1.5dvw,10rem)]">
        {/* AQI text */}
        <p
          className="text-[clamp(0.1rem,2.5dvh,10rem)] w-[100%] text-center"
          style={{ fontFamily: "MontserratMedium" }}
        >
          AQI
        </p>

        {/* Data container */}
        <div className="flex flex-col justify-center items-start gap-2 w-[100%] h-auto">
          {/* Text info */}
          <p
            className="text-[clamp(0.1rem,2.3dvh,10rem)]"
            style={{ fontFamily: "RobotoBold" }}
          >
            {getAQI(index)}({index})
          </p>

          {/* Progress bar */}
          <div className="w-[100%] h-[2.7dvh] bg-[#A5A5A5] rounded-[99999px]">
            <div
              className="h-[100%] bg-gradient-to-r from-[#FFEF60] to-[#E6DD27] rounded-[99999px]"
              style={{ width: `${index * 10}%` }}
            />
          </div>
        </div>
      </div>
    </Card>
  );
}

export default AQI;
