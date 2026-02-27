//Component for displaying sunrise and sunset with animation
function SunriseSunset({ sunrise, sunset }) {
  return (
    //Main container
    <div className="w-[38dvw] h-[35dvh] rounded-[clamp(0.1rem,4dvw,10rem)] bg-[#1453B6] text-[#fafafa] py-[1.5%] shadow-[0_clamp(0.1rem,0.5dvh,2rem)_clamp(0.1rem,1dvh,10rem)_rgba(0,0,0,0.25)]">
      {/* Container for svg and text */}
      <div className="w-full h-full flex flex-col justify-center items-center gap-10">
        {/* Svg container */}
        <svg
          viewBox="0 0 100 50"
          className="w-full h-[60%]"
          preserveAspectRatio="none"
        >
          <path
            d="M 0 50 Q 50 0 100 50"
            stroke="orange"
            strokeWidth="0.7"
            strokeLinecap="round"
            fill="none"
          />
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
