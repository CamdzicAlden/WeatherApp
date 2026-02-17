import DayForecast from "./DayForecast";
import HorizontalLine from "./HorizontalLine";

//Component for displaying 7 day forecast
function SevenDayForecast() {
  return (
    //Main flex container
    <div className="flex flex-col justify-start items-start w-[38dvw] h-[70dvh] rounded-[clamp(0.1rem,4dvw,10rem)] bg-[#1453B6] text-[#fafafa] px-[3%] py-[1.5%]">
      {/* 7-DAY FORECAST text container */}
      <div className="h-[10%] w-[100%] flex justify-start items-center">
        <p
          className="text-[clamp(0.1rem,2dvh,10rem)] "
          style={{ fontFamily: "MontserratBold" }}
        >
          7-DAY FORECAST
        </p>
      </div>

      <div className="w-[100%] h-[90%] flex flex-col justify-center items-center gap-3">
        <DayForecast />
        <HorizontalLine />

        <DayForecast />
        <HorizontalLine />

        <DayForecast />
        <HorizontalLine />

        <DayForecast />
        <HorizontalLine />

        <DayForecast />
        <HorizontalLine />

        <DayForecast />
        <HorizontalLine />

        <DayForecast />
      </div>
    </div>
  );
}

export default SevenDayForecast;
