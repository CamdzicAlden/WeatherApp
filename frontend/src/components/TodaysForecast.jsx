import HourForecast from "./HourForecast";
import VerticalLine from "./VerticalLine";

import { useRef, useState, useEffect } from "react";

//Component for displaying today's forecast
function TodaysForecast({ todaysForecast, isFullMoon }) {
  //Getting current time epoch in ms
  const now = Date.now();
  //Extracting 24 hours after current hour
  const upcomingHours = todaysForecast
    .filter((el) => el.time_epoch * 1000 > now)
    .slice(0, 24);

  //Ref and state for scrolling logic
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(true);
  const [canScrollRight, setCanScrollRight] = useState(true);

  //Method for checking if we can scroll left & right
  const checkScroll = () => {
    //Getting referenced element
    const el = scrollRef.current;

    if (!el) return;

    //Checking if we are maximum to the left
    const isAtStart = el.scrollLeft <= 0;

    //Checking if we are maximum to the right
    const isAtEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;

    //Updating states with data
    setCanScrollLeft(!isAtStart);
    setCanScrollRight(!isAtEnd);
  };

  //Method for scrolling left
  const scrollLeft = () => {
    const el = scrollRef.current;

    //Browser scrollBy method
    el.scrollBy({
      //To the left 70%
      left: -el.clientWidth * 0.7,
      behavior: "smooth",
    });
  };

  //Method for scrolling right
  const scrollRight = () => {
    const el = scrollRef.current;

    el.scrollBy({
      //To the right 70%
      left: el.clientWidth * 0.7,
      behavior: "smooth",
    });
  };

  //Call checkScroll on first render to display arrow icons correctly
  useEffect(() => {
    checkScroll();
  }, []);

  return (
    //Main flex container
    <div className="flex flex-col justify-evenly items-center w-[50dvw] h-[35dvh] rounded-[clamp(0.1rem,4dvw,10rem)] bg-[#1453B6] mx-auto my-[3%] px-[1%] py-[1.5%] text-[#fafafa] shadow-[0_clamp(0.1rem,0.5dvh,2rem)_clamp(0.1rem,1dvh,10rem)_rgba(0,0,0,0.25)]">
      {/* Today's forecast paragraph */}
      <p
        className="text-[clamp(0.1rem,2dvh,10rem)] w-full text-left pl-[6%]"
        style={{ fontFamily: "MontserratBold" }}
      >
        TODAY'S FORECAST
      </p>

      {/* Container for hour forecast and arrows */}
      <div className="flex justify-center items-center w-full gap-[1%]">
        {/* Left arrow icon */}
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
          className="todaysForecastScroll flex justify-start items-center gap-[clamp(0.1rem,1.2dvw,4rem)] w-full h-auto overflow-x-scroll"
        >
          {/* Mapping through 24 hours forecast data */}
          {upcomingHours.map((element, index) => {
            //Getting hours from element time epoch
            let hours = new Date(element.time_epoch * 1000).getHours();

            //Getting time suffix
            const timeSuffix = hours > 11 ? "PM" : "AM";

            //Getting correct number of hours
            hours = hours % 12 || 12;

            //Making formatted time variable
            const formattedTime = `${hours}:00 ${timeSuffix}`;

            return (
              //Container for one hour forecast and line
              <div
                key={index}
                className="flex justify-center items-center h-auto gap-[clamp(0.1rem,1.5dvw,4rem)]"
              >
                {/* Custom hourForecast component */}
                <HourForecast
                  hours={formattedTime}
                  conditionCode={element.condition.code}
                  temp={Math.round(element.temp_c)}
                  humidity={Math.round(element.humidity / 10)}
                  isDay={element.is_day}
                  isFullMoon={isFullMoon}
                />

                {index !== upcomingHours.length - 1 && <VerticalLine />}
              </div>
            );
          })}
        </div>

        {/* Right arrow icon */}
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
