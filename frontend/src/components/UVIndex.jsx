import Card from "./Card";

function UVIndex() {
  return (
    <Card>
      <div className="flex justify-center items-center gap-1.5 w-[100%] h-[50%] ">
        <img
          src="/icons/sun.svg"
          alt="I"
          className="h-[clamp(0.1rem,3dvh,10rem)] w-auto"
        />
        <p
          className="text-[clamp(0.1rem,2.2dvh,10rem)]"
          style={{ fontFamily: "MontserratMedium" }}
        >
          UV Index
        </p>
      </div>

      <div className="flex flex-col justify-center items-start gap-2 w-[100%] h-[50%] px-[clamp(0.1rem,2dvw,10rem)]">
        <p
          className="text-[clamp(0.1rem,2.5dvh,10rem)]"
          style={{ fontFamily: "RobotoBold" }}
        >
          Low
        </p>
      </div>
    </Card>
  );
}

export default UVIndex;
