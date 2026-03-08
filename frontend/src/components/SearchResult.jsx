import CityTag from "./CityTag";

//Component for displaying search result
function SearchResult({ resultData = [], onSelect, selectedCity }) {
  return (
    //Main flex container
    <div className="searchResultScroll w-full flex-1 min-h-0 flex flex-col justify-start items-center gap-3 text-[#fafafa] text-[clamp(0.1rem,2.7vh,10rem)] overflow-y-auto [text-shadow:0_clamp(0.1rem,0.2vh,5rem)_clamp(0.1rem,0.5vh,5rem)_rgba(0,0,0,0.25)]">
      {!resultData.length ? (
        <div className="w-full h-full flex justify-center items-center">
          No data to show!
        </div>
      ) : (
        resultData.map((city, index) => {
          return (
            <div
              key={index}
              className={`w-full h-auto flex justify-center gap-[10%] items-center cursor-pointer transition ${selectedCity?.id === city.id ? "bg-[#1968E4]" : "hover:bg-[#1968E4]"}`}
              onClick={() => onSelect(city)}
              style={{ fontFamily: "Montserrat" }}
            >
              <div className="w-[45%] flex justify-center items-center">
                <CityTag city={city.name} inheritFont={true} />
              </div>
              <div className="w-[45%] flex justify-center items-center text-center break-words">
                {city.country}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default SearchResult;
