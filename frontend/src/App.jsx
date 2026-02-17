import Background from "./components/Background.jsx";
import CurrentWeather from "./components/CurrentWeather.jsx";
import TodaysForecast from "./components/TodaysForecast.jsx";

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
    </>
  );
}

export default App;
