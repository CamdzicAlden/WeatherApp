import AQI from "./components/AQI.jsx";
import Background from "./components/Background.jsx";
import Copyright from "./components/Copyright.jsx";
import CurrentWeather from "./components/CurrentWeather.jsx";
import Humidity from "./components/Humidity.jsx";
import MoonPhase from "./components/MoonPhase.jsx";
import SevenDayForecast from "./components/SevenDayForecast.jsx";
import SocialMedia from "./components/SocialMedia.jsx";
import SunriseSunset from "./components/SunriseSunset.jsx";
import TodaysForecast from "./components/TodaysForecast.jsx";
import UVIndex from "./components/UVIndex.jsx";
import Visibility from "./components/Visibility.jsx";
import Wind from "./components/Wind.jsx";

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

      <div className="flex justify-center items-center w-[100%] h-[107dvh] my-[3%] gap-7">
        <div className="flex flex-col justify-center items-center gap-[2dvh]">
          <SevenDayForecast />
          <SunriseSunset />
        </div>

        <div className="flex flex-col justify-center items-center gap-[2dvh]">
          <UVIndex />
          <Humidity />
          <AQI />
        </div>

        <div className="flex flex-col justify-center items-center gap-[2dvh]">
          <Visibility />
          <Wind />
          <MoonPhase />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-2 mb-[1%] mt-[10%]">
        <SocialMedia />
        <Copyright />
      </div>
    </>
  );
}

export default App;
