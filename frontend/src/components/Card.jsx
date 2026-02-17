function Card({ children }) {
  return (
    <div className="w-[30dvh] h-[34dvh] bg-[#1353B6] rounded-[clamp(0.1rem,3dvw,10rem)] text-[#fafafa]">
      {children}
    </div>
  );
}

export default Card;
