import DayForecast from "./DayForecast";
import HorizontalLine from "./HorizontalLine";

//Component for displaying 7 day forecast
function SevenDayForecast({ weekForecast, yesterday, loading }) {
  if (loading) return <p>Loading...</p>;

  return (
    //Main flex container
    <div className="flex flex-col justify-evenly items-center w-[95dvw] h-[55vh] lg:w-[38dvw] lg:h-[70vh] rounded-[clamp(2rem,4dvw,10rem)] bg-[#1453B6] text-[#fafafa] px-[7%] py-[3%] shadow-[0_clamp(0.1rem,0.5vh,2rem)_clamp(0.1rem,1vh,10rem)_rgba(0,0,0,0.25)]">
      {/* 7-DAY FORECAST text container */}
      <div className="h-[10%] w-[100%] flex justify-start items-center">
        <p
          className="text-[clamp(0.9rem,1vw,5rem)] [text-shadow:0_clamp(0.05rem,0.2vh,5rem)_clamp(0.1rem,0.3vh,5rem)_rgba(0,0,0,0.25)]"
          style={{ fontFamily: "MontserratBold" }}
        >
          7-DAY FORECAST
        </p>
      </div>

      {/* 7-Day forecast */}
      <div className="w-[100%] h-[90%] flex flex-col justify-center items-center gap-0.5">
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
        {weekForecast.time.map((element, index) => {
          //Getting current date and current element date
          const today = new Date();
          const day = new Date(element);

          //Conditionaly set dayNum to real day num or 7 (today)
          const dayNum =
            day.toDateString() !== today.toDateString()
              ? new Date(element).getDay()
              : 7;

          return (
            //Container for DayForecast and HorizontalLine
            <div
              key={index}
              className="flex flex-col w-full h-auto justify-center items-center"
            >
              <DayForecast
                dayNum={dayNum}
                rainChance={
                  weekForecast["precipitation_probability_max"][index]
                }
                minTemp={Math.round(weekForecast["temperature_2m_min"][index])}
                maxTemp={Math.round(weekForecast["temperature_2m_max"][index])}
                imageCode={weekForecast["weather_code"][index]}
              />

              {index !== weekForecast.time.length - 1 && <HorizontalLine />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SevenDayForecast;
