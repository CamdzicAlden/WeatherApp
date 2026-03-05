import HorizontalLine from "./HorizontalLine";

//Component for displaying search result header (city & country)
function SearchResultHeader() {
  return (
    //Main flex container
    <div className="w-full h-auto flex flex-col justify-center items-center gap-2 text-[#fafafa]">
      {/* Container for text */}
      <div
        className="w-full h-auto flex justify-center items-center gap-[10%] text-[clamp(0.1rem,3dvh,10rem)] [text-shadow:0_clamp(0.1rem,0.2dvh,5rem)_clamp(0.1rem,0.5dvh,5rem)_rgba(0,0,0,0.25)]"
        style={{ fontFamily: "MontserratMedium" }}
      >
        <div className="w-[45%] flex justify-center items-center">City</div>
        <div className="w-[45%] flex justify-center items-center">Country</div>
      </div>

      {/* Custom horizontal line */}
      <HorizontalLine />
    </div>
  );
}

export default SearchResultHeader;
