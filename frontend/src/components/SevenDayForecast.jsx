import DayForecast from "./DayForecast";
import HorizontalLine from "./HorizontalLine";

//Component for displaying 7 day forecast
function SevenDayForecast({ weekForecast, yesterday }) {
  return (
    //Main flex container
    <div className="flex flex-col justify-evenly items-center w-[38dvw] h-[70dvh] rounded-[clamp(0.1rem,4dvw,10rem)] bg-[#1453B6] text-[#fafafa] px-[7%] py-[3%] shadow-[0_clamp(0.1rem,0.5dvh,2rem)_clamp(0.1rem,1dvh,10rem)_rgba(0,0,0,0.25)]">
      {/* 7-DAY FORECAST text container */}
      <div className="h-[10%] w-[100%] flex justify-start items-center">
        <p
          className="text-[clamp(0.1rem,2dvh,10rem)]"
          style={{ fontFamily: "MontserratBold" }}
        >
          7-DAY FORECAST
        </p>
      </div>

      {/* 7-Day forecast */}
      <div className="w-[100%] h-[90%] flex flex-col justify-center items-center gap-[clamp(0.1rem,1dvh,10rem)]">
        {/* Yesterday */}
        <DayForecast
          dayNum={8}
          rainChance={yesterday.daily_chance_of_rain}
          minTemp={Math.round(yesterday.mintemp_c)}
          maxTemp={Math.round(yesterday.maxtemp_c)}
          imageCode={yesterday.condition.code}
        />
        <HorizontalLine />

        {/* 6 remaining days */}
        {weekForecast.map((element, index) => {
          //Getting current date and current element date
          const today = new Date();
          const day = new Date(element.date_epoch * 1000);

          //Conditionaly set dayNum to real day num or 7 (today)
          const dayNum =
            day.toDateString() !== today.toDateString()
              ? new Date(element.date_epoch * 1000).getDay()
              : 7;

          return (
            //Container for DayForecast and HorizontalLine
            <div
              key={index}
              className="flex flex-col w-full items-start gap-[clamp(0.1rem,1dvh,10rem)]"
            >
              <DayForecast
                dayNum={dayNum}
                rainChance={element.day.daily_chance_of_rain}
                minTemp={Math.round(element.day.mintemp_c)}
                maxTemp={Math.round(element.day.maxtemp_c)}
                imageCode={element.day.condition.code}
              />

              {index !== weekForecast.length - 1 && <HorizontalLine />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SevenDayForecast;
