//Custom card component to prevent repeating
function Card({ children }) {
  return (
    //Card container
    <div className="w-[48dvw] h-[33vh] lg:w-[30vh] lg:h-[34vh] bg-[#1353B6] rounded-[clamp(2rem,3dvw,10rem)] text-[#fafafa] shadow-[0_clamp(0.1rem,0.5vh,2rem)_clamp(0.1rem,1vh,10rem)_rgba(0,0,0,0.25)] [text-shadow:0_clamp(0.05rem,0.1vh,5rem)_clamp(0.05rem,0.2vh,5rem)_rgba(0,0,0,0.25)] px-[clamp(1.2rem,2dvw,5rem)]">
      {children}
    </div>
  );
}

export default Card;
