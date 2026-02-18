//SocialMedia component for displaying social media icons
function SocialMedia() {
  return (
    //Main flex container
    <div className="flex justify-center items-center gap-2">
      {/* LinkedIn icon */}
      <img
        src="/icons/LinkedIn.svg"
        alt="I"
        className="w-[clamp(0.1rem,1.5dvw,10rem)] h-auto"
      />

      {/* Instagram icon */}
      <img
        src="/icons/Instagram.svg"
        alt="I"
        className="w-[clamp(0.1rem,1.5dvw,10rem)] h-auto"
      />

      {/* GitHub icon */}
      <img
        src="/icons/GitHub.svg"
        alt="I"
        className="w-[clamp(0.1rem,1.5dvw,10rem)] h-auto"
      />
    </div>
  );
}

export default SocialMedia;
