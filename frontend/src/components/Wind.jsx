import Card from "./Card";

function Wind() {
  return (
    <Card>
      <div className="flex justify-center items-center gap-1.5 w-[100%] h-[50%] ">
        <img
          src="/icons/wind.svg"
          alt="I"
          className="h-[clamp(0.1rem,3dvh,10rem)] w-auto"
        />
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
