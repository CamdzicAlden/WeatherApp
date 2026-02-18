import Card from "./Card";

//Component for displaying moon phase
function MoonPhase() {
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
          src="/images/WaningCresent.svg"
          alt="I"
          className="h-[clamp(0.1rem,12dvh,10rem)] w-auto"
        />

        {/* Moon phase name */}
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
