import Card from "./Card";

//Component for displaying visibility
function Visibility({ range }) {
  return (
    //Calling custom card component
    <Card>
      {/* Heading flex container */}
      <div className="flex justify-center items-center gap-1.5 w-[100%] h-[50%] ">
        {/* Eye icon */}
        <img
          src="/icons/eye.svg"
          alt="I"
          className="h-[clamp(0.1rem,3vh,10rem)] w-auto"
        />

        {/* Visibility text */}
        <p
          className="text-[clamp(0.1rem,2.2vh,10rem)]"
          style={{ fontFamily: "MontserratMedium" }}
        >
          Visibility
        </p>
      </div>

      {/* Visibility value container */}
      <div className="flex flex-col justify-center items-start gap-2 w-[100%] h-[50%]">
        {/* Visibility value */}
        <p
          className="text-[clamp(0.1rem,3vh,10rem)]"
          style={{ fontFamily: "MontserratMedium" }}
        >
          {range}km
        </p>
      </div>
    </Card>
  );
}

export default Visibility;
