import HourForecast from "./HourForecast";
import VerticalLine from "./VerticalLine";

import { useRef, useState, useEffect } from "react";

//Component for displaying today's forecast
function TodaysForecast({ todaysForecast }) {
  const now = Date.now();
  const upcomingHours = todaysForecast
    .filter((el) => el.time_epoch * 1000 > now)
    .slice(0, 24);

  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(true);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;

    if (!el) return;

    const isAtStart = el.scrollLeft <= 0;
    const isAtEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;

    setCanScrollLeft(!isAtStart);
    setCanScrollRight(!isAtEnd);
  };

  const scrollLeft = () => {
    const el = scrollRef.current;

    el.scrollBy({
      left: -el.clientWidth * 0.7,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    const el = scrollRef.current;

    el.scrollBy({
      left: el.clientWidth * 0.7,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    checkScroll();
  }, []);

  return (
    //Main flex container
    <div className="flex flex-col justify-evenly items-center w-[55dvw] h-[35dvh] rounded-[clamp(0.1rem,4dvw,10rem)] bg-[#1453B6] mx-auto my-[3%] px-[1%] py-[1.5%] text-[#fafafa] shadow-[0_clamp(0.1rem,0.5dvh,2rem)_clamp(0.1rem,1dvh,10rem)_rgba(0,0,0,0.25)]">
      {/* Today's forecast paragraph */}
      <p
        className="text-[clamp(0.1rem,2dvh,10rem)] w-full text-left pl-[6%]"
        style={{ fontFamily: "MontserratBold" }}
      >
        TODAY'S FORECAST
      </p>

      <div className="flex justify-center items-center w-full gap-[1%]">
        <img
          src="/icons/ArrowLeft.svg"
          alt="I"
          className={`w-[5%] h-auto ${canScrollLeft ? "cursor-pointer opacity-100" : "opacity-30 pointer-events-none"}`}
          onClick={scrollLeft}
        />

        {/* Flex container for displaying 24 hour forecast */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="todaysForecastScroll flex justify-start items-center gap-5 w-full h-auto overflow-x-scroll"
        >
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

        <img
          src="/icons/ArrowRight.svg"
          alt="I"
          className={`w-[5%] h-auto ${canScrollRight ? "cursor-pointer opacity-100" : "opacity-30 pointer-events-none"}`}
          onClick={scrollRight}
        />
      </div>
    </div>
  );
}

export default TodaysForecast;
