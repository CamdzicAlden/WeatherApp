function CityTag({ city }) {
  return (
    <div className="flex items-center justify-center w-auto h-auto">
      <img
        src="/icons/locationTag.svg"
        alt="L"
        className="w-[clamp(0.1rem,1.8dvw,10rem)] h-auto"
      />
      <p
        className="text-[clamp(0.1rem,3.3dvh,10rem)]"
        style={{ fontFamily: "Montserrat" }}
      >
        {city}
      </p>
    </div>
  );
}

export default CityTag;
