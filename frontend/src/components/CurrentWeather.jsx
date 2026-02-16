import CityTag from "./CityTag.jsx";

//CurrentWeather component for displaying weather at the moment
function CurrentWeather({ city, image, weatherText, currentTemp, maxMinTemp }) {
  return (
    //Main flex container
    <div className="flex flex-col justify-evenly items-center gap-4 text-[#fafafa] mt-[2%]">
      {/* Location tag */}
      <CityTag city={city} />

      {/* Current weather image */}
      <img
        src={image}
        alt="I"
        className="w-[clamp(0.1rem,15dvw,20rem)] h-auto mt-[-3%] mb-[-5%] ml-[-2%]"
      />

      {/* Paragraphs with weather information */}
      <p
        className="text-[clamp(0.1rem,4dvh,10rem)]"
        style={{ fontFamily: "MontserratMedium", fontWeight: 500 }}
      >
        {weatherText}
      </p>

      <p
        className="text-[clamp(0.1rem,8dvh,10rem)]"
        style={{ fontFamily: "MontserratBold", fontWeight: 700 }}
      >
        {currentTemp}
      </p>

      <p
        className="text-[clamp(0.1rem,3dvh,10rem)]"
        style={{ fontFamily: "MontserratMedium", fontWeight: 500 }}
      >
        {maxMinTemp}
      </p>
    </div>
  );
}

export default CurrentWeather;
