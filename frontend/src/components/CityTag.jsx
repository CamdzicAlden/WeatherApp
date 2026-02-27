//Component for displaying location
function CityTag({ city }) {
  return (
    //Main flex container
    <div className="flex items-center justify-center gap-0.5 w-auto h-auto">
      {/* Location tag icon */}
      <img
        src="/icons/locationTag.svg"
        alt="L"
        className="h-[clamp(0.1rem,3.3dvh,10rem)] w-auto"
      />

      {/* City text */}
      <p
        className="text-[clamp(0.1rem,3.3dvh,10rem)]"
        style={{ fontFamily: "Montserrat" }}
      >
        {city}
      </p>
    </div>
  );
}

export default CityTag;
