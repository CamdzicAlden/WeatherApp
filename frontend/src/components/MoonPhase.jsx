import Card from "./Card";

function MoonPhase() {
  return (
    <Card>
      <div className="flex justify-center items-end gap-1.5 w-[100%] h-[20%] ">
        <img
          src="/icons/moon.svg"
          alt="I"
          className="h-[clamp(0.1rem,3dvh,10rem)] w-auto"
        />
        <p
          className="text-[clamp(0.1rem,2.2dvh,10rem)]"
          style={{ fontFamily: "MontserratMedium" }}
        >
          Moon phase
        </p>
      </div>

      <div className="flex flex-col justify-center items-center gap-5 w-[100%] h-[80%] px-[clamp(0.1rem,2dvw,10rem)]">
        <img
          src="/images/WaningCresent.svg"
          alt="I"
          className="h-[clamp(0.1rem,12dvh,10rem)] w-auto"
        />
        <p
          className="text-[clamp(0.1rem,2dvh,10rem)]"
          style={{ fontFamily: "MontserratMedium" }}
        >
          Waning Cresent
        </p>
      </div>
    </Card>
  );
}

export default MoonPhase;
