//Component for displaying loading circle
function Loading() {
  return (
    //Svg container
    <svg viewBox="0 0 100 100" className="w-[11%] h-auto">
      <circle
        cx={50}
        cy={50}
        r={45}
        fill="none"
        strokeWidth={7}
        stroke="#959595"
      />
      <circle
        cx={50}
        cy={50}
        r={45}
        fill="none"
        strokeWidth={7}
        stroke="#1453B6"
        strokeDasharray={283}
        strokeDashoffset={220}
        strokeLinecap="round"
        className="animate-spin origin-center"
      />
    </svg>
  );
}

export default Loading;
