import { useEffect, useState, useRef } from "react";

//Component for displaying sunrise and sunset with animation
function SunriseSunset({ sunrise, sunset }) {
  const minutesInDay = 1439;
  const [currentTime, setCurrentTime] = useState(0);
  const pathRef = useRef(null);
  const [sunPos, setSunPos] = useState({ x: 0, y: 0 });
  const [sunrisePos, setSunrisePos] = useState(null);
  const [sunsetPos, setSunsetPos] = useState(null);

  //Function for getting day percent in 0.0 to 1.0 form
  function getTimePosition(time) {
    return time / minutesInDay;
  }

  //Function for getting number of minutes for given time
  function convertToMin(time) {
    let h = parseInt(time.slice(0, 2), 10);
    const m = parseInt(time.slice(3, 5), 10);
    h = time.slice(6, 8) === "PM" ? h + 12 : h;

    return h * 60 + m;
  }

  //Every time currentTime changes
  useEffect(() => {
    if (!pathRef.current) return;

    const path = pathRef.current;
    //Getting total svg length
    const pathLength = path.getTotalLength();

    const updateSun = () => {
      //Calling getTimePosition to get day percentage
      const pos = getTimePosition(currentTime);
      //Multiply day percentage with total svg line length
      const point = path.getPointAtLength(pos * pathLength);
      //Update sun positon with x and y coords
      setSunPos({ x: point.x, y: point.y });
    };

    updateSun();
  }, [currentTime]);

  //UseEffect for starting time interval
  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      setCurrentTime(date.getHours() * 60 + date.getMinutes());
    };

    updateTime();

    //Every 60 seconds run updateTime function
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  //Run every time sunrise or sunset change to get positions for gradient
  useEffect(() => {
    setSunrisePos(Math.round(getTimePosition(convertToMin(sunrise)) * 100));
    setSunsetPos(Math.round(getTimePosition(convertToMin(sunset)) * 100));
  }, [sunrise, sunset]);

  return (
    //Main container
    <div className="w-[38dvw] h-[35dvh] rounded-[clamp(0.1rem,4dvw,10rem)] bg-[#1453B6] text-[#fafafa] pb-[3%] shadow-[0_clamp(0.1rem,0.5dvh,2rem)_clamp(0.1rem,1dvh,10rem)_rgba(0,0,0,0.25)] [text-shadow:0_clamp(0.05rem,0.2dvh,5rem)_clamp(0.05rem,0.3dvh,5rem)_rgba(0,0,0,0.25)]">
      {/* Container for svg and text */}
      <div className="w-full h-full flex flex-col justify-center items-center gap-7">
        {sunrisePos !== null && sunsetPos !== null && (
          // Svg container
          <svg viewBox="0 0 100 50" className="w-full h-auto">
            <defs>
              <linearGradient
                id="dayNightGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#444444" />
                <stop offset={`${sunrisePos}%`} stopColor="#aa7200" />
                <stop offset="50%" stopColor="#F8A702" />
                <stop offset={`${sunsetPos}%`} stopColor="#aa7200" />
                <stop offset="100%" stopColor="#444444" />
              </linearGradient>

              <linearGradient
                id="sunGradient"
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#FFE600" />
                <stop offset="100%" stopColor="#FF7A00" />
              </linearGradient>
            </defs>

            <path
              d="M 0 50 Q 50 0 100 50"
              stroke="url(#dayNightGradient)"
              strokeWidth="0.7"
              strokeLinecap="round"
              fill="none"
              ref={pathRef}
            />
            <circle
              cx={sunPos.x}
              cy={sunPos.y}
              r="3"
              fill="url(#sunGradient)"
            />
          </svg>
        )}

        {/* Container for sunrise/sunset text */}
        <div
          className="w-full h-[40%] flex justify-between items-center px-[3dvw]"
          style={{ fontFamily: "Roboto" }}
        >
          <div className="w-auto h-auto flex flex-col justify-center items-center gap-0.5">
            <p>Sunrise</p>
            <p style={{ fontFamily: "Roboto" }}>{sunrise}</p>
          </div>

          <div className="w-auto h-auto flex flex-col justify-center items-center gap-0.5">
            <p>Sunset</p>
            <p style={{ fontFamily: "Roboto" }}>{sunset}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SunriseSunset;
