//Component for displaying search bar
function SearchBar({ onTextChange }) {
  return (
    //Main flex container
    <div className="w-[80%] h-auto rounded-full flex justify-start items-center gap-1 bg-transparent border-2 border-[#fafafa] p-[2%]">
      {/* Search icon */}
      <img
        src="/icons/search.svg"
        alt="S"
        className="h-[clamp(0.1rem,4dvh,10rem)] w-auto"
      />
      {/* Input field */}
      <input
        type="text"
        placeholder="Search for a city..."
        className="w-full h-full border-none bg-none placeholder-[#fafafa70] text-[#fafafa] placeholder-opacity-50 focus:outline-none"
        style={{ fontFamily: "MontserratMedium" }}
        onChange={(e) => onTextChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
