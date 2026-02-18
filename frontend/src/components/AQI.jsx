import Card from "./Card";

function AQI() {
  return (
    <Card>
      <div className="flex justify-center items-center w-[100%] h-[50%] ">
        <p
          className="text-[clamp(0.1rem,2.2dvh,10rem)]"
          style={{ fontFamily: "MontserratMedium" }}
        >
          AQI
        </p>
      </div>

      <div className="flex flex-col justify-center items-start gap-2 w-[100%] h-[50%] px-[clamp(0.1rem,2dvw,10rem)]">
        <p
          className="text-[clamp(0.1rem,2.5dvh,10rem)]"
          style={{ fontFamily: "RobotoBold" }}
        >
          Moderate (55)
        </p>
        <div className="w-[100%] h-[15%] bg-[#A5A5A5] rounded-[99999px]">
          <div className="w-[50%] h-[100%] bg-gradient-to-r from-[#FFEF60] to-[#E6DD27] rounded-[99999px]"></div>
        </div>
      </div>
    </Card>
  );
}

export default AQI;
