//Rounded rectangle component
function BackgroundRectangle({ top, left }) {
  return (
    <div
      //Applying tailwind utilities
      className="fixed w-[30%] h-[15%] bg-[#0D47A1] rounded-[999999px] rotate-[-35deg] shadow-[-0.12rem_0.12rem_0_rgba(0,0,0,0.05),0.12rem_0.12rem_0_rgba(0,0,0,0.05)] blur-[0.10dvw] -translate-x-1/2 -translate-y-1/2"
      style={{ top: `${top}%`, left: `${left}%` }} //Positioning
    />
  );
}

export default BackgroundRectangle;
