import Card from "./Card";

//Component for displaying Wind info
function Wind() {
  return (
    //Custom card component
    <Card>
      {/* Main flex container */}
      <div className="flex justify-center items-center gap-1.5 w-[100%] h-[50%] ">
        {/* Wind icon*/}
        <img
          src="/icons/wind.svg"
          alt="I"
          className="h-[clamp(0.1rem,3dvh,10rem)] w-auto"
        />

        {/* Wind text */}
        <p
          className="text-[clamp(0.1rem,2.2dvh,10rem)]"
          style={{ fontFamily: "MontserratMedium" }}
        >
          Wind
        </p>
      </div>
    </Card>
  );
}

export default Wind;
