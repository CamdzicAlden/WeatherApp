import Card from "./Card";

function Visibility() {
  return (
    <Card>
      <div className="flex justify-center items-center gap-1.5 w-[100%] h-[50%] ">
        <img
          src="/icons/eye.svg"
          alt="I"
          className="h-[clamp(0.1rem,3dvh,10rem)] w-auto"
        />
        <p
          className="text-[clamp(0.1rem,2.2dvh,10rem)]"
          style={{ fontFamily: "MontserratMedium" }}
        >
          Visibility
        </p>
      </div>

      <div className="flex flex-col justify-center items-start gap-2 w-[100%] h-[50%] px-[clamp(0.1rem,2dvw,10rem)]">
        <p
          className="text-[clamp(0.1rem,3dvh,10rem)]"
          style={{ fontFamily: "MontserratMedium" }}
        >
          15.00km
        </p>
      </div>
    </Card>
  );
}

export default Visibility;
