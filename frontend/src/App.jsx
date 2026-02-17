import Background from "./components/Background.jsx";
import CurrentWeather from "./components/CurrentWeather.jsx";
import Humidity from "./components/Humidity.jsx";
import SevenDayForecast from "./components/SevenDayForecast.jsx";
import TodaysForecast from "./components/TodaysForecast.jsx";
import UVIndex from "./components/UVIndex.jsx";

function App() {
  return (
    <>
      {/* Fixed background */}
      <Background />

      <CurrentWeather
        city="Zenica"
        image="/icons/CloudyDay.svg"
        weatherText="Cloudy"
        currentTemp="24°C"
        maxMinTemp="25° 17°"
      />

      <TodaysForecast />

      <div className="flex justify-center items-center w-[100%] h-[70dvh] my-[3%] gap-7">
        <SevenDayForecast />

        <div className="flex flex-col justify-center items-center gap-[2dvh]">
          <UVIndex />
          <Humidity />
        </div>

        <div className="flex flex-col justify-center items-center gap-[2dvh]">
          <UVIndex />
          <Humidity />
        </div>
      </div>
    </>
  );
}

export default App;
