import LiveWeather from "./components/stories/LiveWeather";
function App() {
  return (
    <div className="w-screen h-screen bg-gray-100 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">SkyPulse Weather Dashboard</h1>
      <LiveWeather />
    </div>
  );
}

export default App;
