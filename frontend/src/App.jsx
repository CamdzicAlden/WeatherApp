import BackgroundCircle from "./components/BackgroundCircle";

function App() {
  return (
    //Main app container
    <div className="min-h-screen bg-[#0D47A1]">
      {/*Background*/}
      <BackgroundCircle top={0} left={0} />
      <BackgroundCircle top={35} left={30} />
      <BackgroundCircle top={65} left={65} />
      <BackgroundCircle top={100} left={100} />
    </div>
  );
}

export default App;
