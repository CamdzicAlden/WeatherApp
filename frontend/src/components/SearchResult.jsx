import CityTag from "./CityTag";

//Component for displaying search result
function SearchResult({ resultData = [], onSelect }) {
  return (
    //Main flex container
    <div className="w-full h-full flex flex-col justify-start gap-3 items-center text-[#fafafa] text-[clamp(0.1rem,2.7dvh,10rem)] overflow-y-auto">
      {!resultData.length
        ? "No data to show!"
        : resultData.map((city, index) => {
            return (
              <div
                key={index}
                className="w-full h-auto flex justify-center gap-[10%] items-center"
                onClick={() => onSelect(city)}
              >
                <div className="w-[45%] flex justify-center items-center">
                  <CityTag city={city.name} inheritFont={true} />
                </div>
                <div className="w-[45%] flex justify-center items-center text-center">
                  {city.country}
                </div>
              </div>
            );
          })}
    </div>
  );
}

export default SearchResult;
