//Component for displaying location
function CityTag({ city, onClick, inheritFont = false }) {
  return (
    //Main flex container
    <div
      className="flex items-center justify-center gap-0.5 w-auto h-auto cursor-pointer z-10"
      onClick={onClick}
    >
      {/* Location tag container */}
      <div
        className={`w-auto ${!inheritFont ? "h-[clamp(0.1rem,3.3dvh,10rem)]" : "h-[clamp(0.1rem,2.7dvh,10rem)]"}`}
      >
        {/* Location tag icon */}
        <img src="/icons/locationTag.svg" alt="L" className={`w-full h-full`} />
      </div>

      {/* City text */}
      <p
        style={{
          fontFamily: "Montserrat",
        }}
        className={`break-words ${inheritFont ? "w-[10dvw] text-inherit" : "w-auto text-[clamp(0.1rem,3.3dvh,10rem)]"} [text-shadow:0_clamp(0.1rem,0.3dvh,5rem)_clamp(0.1rem,0.5dvh,5rem)_rgba(0,0,0,0.25)]`}
      >
        {city}
      </p>
    </div>
  );
}

export default CityTag;
