import { useEffect, useState, useRef } from "react";

//Component for displaying sunrise and sunset with animation
function SunriseSunset({ sunrise, sunset }) {
  const minutesInDay = 1439;
  const [currentTime, setCurrentTime] = useState(0);
  const pathRef = useRef(null);
  const [sunPos, setSunPos] = useState({ x: 0, y: 0 });

  function getTimePosition(time) {
    return time / minutesInDay;
  }

  useEffect(() => {
    if (!pathRef.current) return;

    const path = pathRef.current;
    const pathLength = path.getTotalLength();

    const updateSun = () => {
      const pos = getTimePosition(currentTime);
      const point = path.getPointAtLength(pos * pathLength);
      setSunPos({ x: point.x, y: point.y });
    };

    updateSun();
  }, [currentTime]);

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      setCurrentTime(date.getHours() * 60 + date.getMinutes());
    };

    updateTime();

    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    //Main container
    <div className="w-[38dvw] h-[35dvh] rounded-[clamp(0.1rem,4dvw,10rem)] bg-[#1453B6] text-[#fafafa] pb-[3%] shadow-[0_clamp(0.1rem,0.5dvh,2rem)_clamp(0.1rem,1dvh,10rem)_rgba(0,0,0,0.25)]">
      {/* Container for svg and text */}
      <div className="w-full h-full flex flex-col justify-center items-center gap-7">
        {/* Svg container */}
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
              <stop offset="40%" stopColor="#F8A702" />
              <stop offset="60%" stopColor="#F8A702" />
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
          <circle cx={sunPos.x} cy={sunPos.y} r="3" fill="url(#sunGradient)" />
        </svg>

        {/* Container for sunrise/sunset text */}
        <div
          className="w-full h-[40%] flex justify-between items-center px-[3dvw]"
          style={{ fontFamily: "Roboto" }}
        >
          <div className="w-auto h-auto flex flex-col justify-center items-center gap-0.5">
            <p>Sunrise</p>
            <p style={{ fontFamily: "RobotoBold" }}>{sunrise}</p>
          </div>

          <div className="w-auto h-auto flex flex-col justify-center items-center gap-0.5">
            <p>Sunset</p>
            <p style={{ fontFamily: "RobotoBold" }}>{sunset}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SunriseSunset;
