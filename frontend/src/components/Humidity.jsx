import Card from "./Card";

//Component for displaying humidity
function Humidity() {
  return (
    //Custom card component
    <Card>
      {/* Heading flex container */}
      <div className="flex justify-center items-center gap-1.5 w-[100%] h-[50%] ">
        {/* Water drop icon */}
        <img
          src="/icons/water-drop.svg"
          alt="I"
          className="h-[clamp(0.1rem,3dvh,10rem)] w-auto"
        />
        {/* Humidity text */}
        <p
          className="text-[clamp(0.1rem,2.2dvh,10rem)]"
          style={{ fontFamily: "MontserratMedium" }}
        >
          Humidity
        </p>
      </div>

      {/* Data flex container */}
      <div className="flex flex-col justify-center items-start gap-2 w-[100%] h-[50%] px-[clamp(0.1rem,2dvw,10rem)]">
        {/* Percent text */}
        <p
          className="text-[clamp(0.1rem,2.5dvh,10rem)]"
          style={{ fontFamily: "RobotoBold" }}
        >
          50%
        </p>

        {/* Progress bar */}
        <div className="w-[100%] h-[15%] bg-[#A5A5A5] rounded-[99999px]">
          <div className="w-[50%] h-[100%] bg-gradient-to-r from-[#6BFEF7] to-[#217DB6] rounded-[99999px]"></div>
        </div>
      </div>
    </Card>
  );
}

export default Humidity;
