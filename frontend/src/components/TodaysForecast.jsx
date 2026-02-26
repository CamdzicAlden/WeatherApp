import HourForecast from "./HourForecast";
import VerticalLine from "./VerticalLine";

//Component for displaying today's forecast
function TodaysForecast({ todaysForecast }) {
  const now = Date.now();
  const upcomingHours = todaysForecast
    .filter((el) => el.time_epoch * 1000 > now)
    .slice(0, 24);

  return (
    //Main flex container
    <div className="flex flex-col gap-5 justify-start items-center w-[50dvw] h-[35dvh] rounded-[clamp(0.1rem,4dvw,10rem)] bg-[#1453B6] mx-auto my-[3%] px-[3%] py-[1.5%] text-[#fafafa] shadow-[0_clamp(0.1rem,0.5dvh,2rem)_clamp(0.1rem,1dvh,10rem)_rgba(0,0,0,0.25)]">
      {/* Today's forecast paragraph */}
      <p
        className="text-[clamp(0.1rem,2dvh,10rem)] w-full text-left"
        style={{ fontFamily: "MontserratBold" }}
      >
        TODAY'S FORECAST
      </p>

      {/* Flex container for displaying 24 hour forecast */}
      <div className="todaysForecastScroll flex justify-start items-center gap-5 w-[100%] h-auto overflow-x-scroll">
        {upcomingHours.map((element, index) => {
          let hours = new Date(element.time_epoch * 1000).getHours();
          const timeSuffix = hours > 11 ? "PM" : "AM";
          hours = hours % 12 || 12;
          const formattedTime = `${hours}:00 ${timeSuffix}`;

          return (
            <div key={index} className="flex items-center gap-5 h-auto">
              <HourForecast
                hours={formattedTime}
                conditionCode={element.condition.code}
                temp={Math.round(element.temp_c)}
                humidity={Math.round(element.humidity / 10)}
                isDay={element.is_day}
                isFullMoon={false}
              />

              {index !== upcomingHours.length - 1 && <VerticalLine />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TodaysForecast;
