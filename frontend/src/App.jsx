import BackgroundCircle from "./components/BackgroundCircle";
import BackgroundRectangle from "./components/BackgroundRectangle";

function App() {
  return (
    //Main app container
    <div className="min-h-screen bg-[#0D47A1]">
      {/*Background*/}
      <BackgroundCircle top={0} left={0} />
      <BackgroundCircle top={35} left={30} />
      <BackgroundCircle top={65} left={65} />
      <BackgroundCircle top={100} left={100} />

      <BackgroundRectangle top={90} left={5} />
      <BackgroundRectangle top={108} left={6} />
      <BackgroundRectangle top={80} left={-4} />

      <BackgroundRectangle top={5} left={95} />
      <BackgroundRectangle top={12} left={104} />
      <BackgroundRectangle top={-12} left={94} />
    </div>
  );
}

export default App;
