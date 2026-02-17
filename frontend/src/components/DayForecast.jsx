function DayForecast() {
  return (
    <div className="flex justify-between items-center w-[100%] h-auto">
      <p
        className="text-[clamp(0.1rem,2.2dvh,10rem)]"
        style={{ fontFamily: "MontserratMedium" }}
      >
        Yesterday
      </p>

      {/* Whole right side container */}
      <div className="flex justify-center items-center gap-4">
        {/* Humidity and images container */}
        <div className="flex justify-center items-center gap-6">
          {/* Humidity container */}
          <div className="flex justify-center items-center gap-0.5">
            {/* Water drop image */}
            <img
              src="/icons/water-drop.svg"
              alt="I"
              className="h-[clamp(0.1rem,1.7dvh,10rem)]"
            />

            <p
              className="text-[clamp(0.1rem,1.7dvh,10rem)]"
              style={{ fontFamily: "Roboto" }}
            >
              30%
            </p>
          </div>

          <img
            src="/icons/CloudyDay.svg"
            alt="I"
            className="h-[clamp(0.1rem,9dvh,10rem)] w-auto m-[-10%]"
          />
          <img
            src="/icons/CloudyNight.svg"
            alt="I"
            className="h-[clamp(0.1rem,9dvh,10rem)] w-auto m-[-10%]"
          />
        </div>

        <p
          className="text-[clamp(0.1rem,2dvh,10rem)]"
          style={{ fontFamily: "Montserrat" }}
        >
          25° 17°
        </p>
      </div>
    </div>
  );
}

export default DayForecast;
