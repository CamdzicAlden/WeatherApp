//Copyright component for displaying copyright text
function Copyright() {
  return (
    //Main flex container
    <div className="flex justify-center items-center gap-0.5">
      {/* Copy symbol */}
      <img
        src="/icons/copyright.svg"
        alt="I"
        className="w-auto h-[clamp(0.1rem,2dvh,10rem)]"
      />

      {/* Copyright text */}
      <p
        className="text-[#fafafa] text-[clamp(0.1rem,1.6dvh,10rem)]"
        style={{ fontFamily: "Roboto" }}
      >
        2026 Alden Camdzic
      </p>
    </div>
  );
}

export default Copyright;
