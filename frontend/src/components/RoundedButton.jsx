//Component for displaying rounded button
function RoundedButton({
  text,
  color,
  onClick,
  opacity = 1,
  pointerEvents = "auto",
}) {
  return (
    //Button container
    <div
      className="w-[clamp(5rem,7dvw,10rem)] h-auto flex justify-center items-center shadow-[0_clamp(0.1rem,0.2vh,2rem)_clamp(0.1rem,0.5vh,10rem)_rgba(0,0,0,0.25)] text-[#fafafa] text-[clamp(0.1rem,2.2vh,10rem)] rounded-full leading-loose cursor-pointer [text-shadow:0_clamp(0.1rem,0.3vh,5rem)_clamp(0.1rem,0.5vh,10rem)_rgba(0,0,0,0.25)] transition-all hover:scale-98 hover:shadow-none ease-in-out duration-150 will-change-transform"
      style={{
        backgroundColor: `${color}`,
        fontFamily: "Roboto",
        opacity: `${opacity}`,
        pointerEvents: `${pointerEvents}`,
      }}
      onClick={onClick}
    >
      {text}
    </div>
  );
}

export default RoundedButton;
