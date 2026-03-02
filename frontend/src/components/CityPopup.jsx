import RoundedButton from "./RoundedButton";
import SearchBar from "./SearchBar";

import { useEffect, useState } from "react";
import SearchResultHeader from "./SearchResultHeader";
import SearchResult from "./SearchResult";
import { fetchSearch } from "../../api/weatherapi";

//Component for displaying popup for choosing city
function CityPopup({ onClose, onOK }) {
  const [searchText, setSearchText] = useState(null);
  const [results, setResults] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [loading, setLoading] = useState(false);

  //Method for handling search
  const handleSearch = async () => {
    if (!searchText) return;
    setLoading(true);

    try {
      const data = await fetchSearch(searchText);
      setResults(data);
    } catch (err) {
      console.error("fetchSearch: ", err.message);
    }
    setLoading(false);
  };

  const handleSelect = (city) => {
    setSelectedCity(city);
  };

  //Automatically fire search 1 s after text is changed
  useEffect(() => {
    const timeout = setTimeout(handleSearch, 1000);

    return () => clearTimeout(timeout);
  }, [searchText]);

  return (
    //Overlay container preventing clicks
    <div className="fixed inset-0 w-full h-full z-50 bg-[rgba(13,71,161,0.8)] flex justify-center items-center">
      {/* Modal container */}
      <div className="w-[40%] h-[70%] mx-auto my-auto rounded-[clamp(0.1rem,6dvw,10rem)] bg-[#1453B6] px-[5%] py-[3%] flex flex-col justify-between items-center">
        <div className="h-[80%] w-full flex flex-col justify-start items-center gap-8">
          <SearchBar onTextChange={setSearchText} />

          <div className="w-full flex-1 min-h-0 flex flex-col justify-start items-center gap-2">
            <SearchResultHeader />
            <SearchResult
              resultData={results}
              onSelect={(city) => handleSelect(city)}
              selectedCity={selectedCity}
            />
          </div>
        </div>

        {/* OK/CANCEL buttons */}
        <div className="h-[10%] flex justify-center items-center gap-2">
          <RoundedButton
            text={"OK"}
            color={"#1968E4"}
            opacity={!selectedCity ? "0.3" : "1"}
            pointerEvents={!selectedCity ? "none" : "auto"}
            onClick={() => onOK(selectedCity)}
          />
          <RoundedButton text={"CANCEL"} color={"#AC4641"} onClick={onClose} />
        </div>
      </div>
    </div>
  );
}

export default CityPopup;
