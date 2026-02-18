import HourForecast from "./HourForecast";
import VerticalLine from "./VerticalLine";

//Component for displaying today's forecast
function TodaysForecast() {
  return (
    //Main flex container
    <div className="flex flex-col gap-5 justify-start items-start w-[50dvw] h-[35dvh] rounded-[clamp(0.1rem,4dvw,10rem)] bg-[#1453B6] mx-auto my-[3%] px-[3%] py-[1.5%] text-[#fafafa] shadow-[0_clamp(0.1rem,0.5dvh,2rem)_clamp(0.1rem,1dvh,10rem)_rgba(0,0,0,0.25)]">
      {/* Today's forecast paragraph */}
      <p
        className="text-[clamp(0.1rem,2dvh,10rem)]"
        style={{ fontFamily: "MontserratBold" }}
      >
        TODAY'S FORECAST
      </p>

      {/* Flex container for displaying 24 hour forecast */}
      <div className="flex justify-start items-center gap-5 w-[100%] h-auto">
        <HourForecast
          hours="13:00PM"
          image="/icons/CloudyDay.svg"
          temp="25"
          humidity="60"
        />

        <VerticalLine />

        <HourForecast
          hours="13:00PM"
          image="/icons/CloudyDay.svg"
          temp="25"
          humidity="60"
        />

        <VerticalLine />

        <HourForecast
          hours="13:00PM"
          image="/icons/CloudyDay.svg"
          temp="25"
          humidity="60"
        />

        <VerticalLine />

        <HourForecast
          hours="13:00PM"
          image="/icons/CloudyDay.svg"
          temp="25"
          humidity="60"
        />

        <VerticalLine />

        <HourForecast
          hours="13:00PM"
          image="/icons/CloudyDay.svg"
          temp="25"
          humidity="60"
        />
      </div>
    </div>
  );
}

export default TodaysForecast;
