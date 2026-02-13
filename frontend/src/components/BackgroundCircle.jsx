//BackgroundCircle component for background drawing
function BackgroundCircle({ top = 0, left = 0 }) {
  //Template string holding tailwind utilities
  const classes = `fixed drop-shadow-[0_0.2rem_0_rgba(0,0,0,0.05)] blur-[0.10dvw] -translate-x-1/2 -translate-y-1/2`;
  return (
    //Svg container
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      className={classes} //Applying tailwind utilities
      style={{ top: `${top}%`, left: `${left}%` }} //Svg positioning
    >
      {/* Svg circle */}
      <circle
        cx="100"
        cy="100"
        r="90"
        stroke="#0D47A1"
        strokeWidth="20"
        fill="none"
      />
    </svg>
  );
}

export default BackgroundCircle;
