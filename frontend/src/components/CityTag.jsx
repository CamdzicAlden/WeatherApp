//Component for displaying location
function CityTag({ city, onClick, inheritFont = false }) {
  return (
    //Main flex container
    <div
      className="flex items-center justify-center gap-0.5 w-auto h-auto cursor-pointer z-10"
      onClick={onClick}
    >
      <div
        style={{
          height: `${!inheritFont ? "clamp(0.1rem,3.3dvh,10rem)" : "clamp(0.1rem,2.7dvh,10rem)"}`,
          width: "auto",
        }}
      >
        {/* Location tag icon */}
        <img src="/icons/locationTag.svg" alt="L" className="w-full h-full" />
      </div>

      {/* City text */}
      <p
        style={{
          fontFamily: "Montserrat",
          fontSize: `${!inheritFont ? "clamp(0.1rem,3.3dvh,10rem)" : "inherit"}`,
        }}
        className={`break-words ${inheritFont ? "w-[10dvw]" : "w-auto"}`}
      >
        {city}
      </p>
    </div>
  );
}

export default CityTag;
