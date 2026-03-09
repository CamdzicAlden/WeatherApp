import BackgroundCircle from "./BackgroundCircle.jsx";
import BackgroundRectangle from "./BackgroundRectangle.jsx";

//Component for displaying background
function Background({ blured = false }) {
  return (
    //Background container
    <div
      className={`fixed inset-0 z-[-5] min-h-screen min-h-[100dvh] w-full bg-[#0D47A1] ${blured ? "opacity-85" : "opacity-100"}`}
    >
      {/*Background elements*/}
      <BackgroundCircle top={0} left={0} />
      <BackgroundCircle top={35} left={30} />
      <BackgroundCircle top={65} left={65} />
      <BackgroundCircle top={100} left={100} />

      <div className="hidden lg:block fixed inset-0 w-full h-full">
        <BackgroundRectangle top={90} left={5} />
        <BackgroundRectangle top={108} left={6} />
        <BackgroundRectangle top={80} left={-4} />

        <BackgroundRectangle top={5} left={95} />
        <BackgroundRectangle top={12} left={104} />
        <BackgroundRectangle top={-12} left={94} />
      </div>
    </div>
  );
}

export default Background;
