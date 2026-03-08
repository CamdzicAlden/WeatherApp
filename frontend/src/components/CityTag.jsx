//Component for displaying location
function CityTag({ city, onClick, inheritFont = false }) {
  return (
    //Main flex container
    <div
      className="flex items-center justify-center gap-0.5 w-full h-auto cursor-pointer z-10"
      onClick={onClick}
    >
      {/* Location tag container */}
      <div
        className={`w-auto ${!inheritFont ? "lg:h-[clamp(0.1rem,3.3vh,10rem)] h-[clamp(0.1rem,3vh,10rem)]" : "h-[clamp(0.1rem,2.7vh,10rem)]"}`}
      >
        {/* Location tag icon */}
        <img src="/icons/locationTag.svg" alt="L" className={`w-full h-full`} />
      </div>

      {/* City text */}
      <p
        style={{
          fontFamily: "Montserrat",
        }}
        className={`break-words ${inheritFont ? "w-[clamp(8rem,10dvw,10rem)] text-inherit" : " w-auto lg:text-[clamp(0.1rem,3.3vh,10rem)] text-[clamp(0.2rem,3vh,5rem)]"} [text-shadow:0_clamp(0.1rem,0.3vh,5rem)_clamp(0.1rem,0.5vh,5rem)_rgba(0,0,0,0.25)]`}
      >
        {city}
      </p>
    </div>
  );
}

export default CityTag;
