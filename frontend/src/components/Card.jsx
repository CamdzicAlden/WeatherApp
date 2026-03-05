//Custom card component to prevent repeating
function Card({ children }) {
  return (
    //Card container
    <div className="w-[30dvh] h-[34dvh] bg-[#1353B6] rounded-[clamp(0.1rem,3dvw,10rem)] text-[#fafafa] shadow-[0_clamp(0.1rem,0.5dvh,2rem)_clamp(0.1rem,1dvh,10rem)_rgba(0,0,0,0.25)] [text-shadow:0_clamp(0.05rem,0.1dvh,5rem)_clamp(0.05rem,0.2dvh,5rem)_rgba(0,0,0,0.25)]">
      {children}
    </div>
  );
}

export default Card;
