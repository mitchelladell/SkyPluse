import { LiveWeather } from "./components/stories/LiveWeather";
function App() {
  return (
    <div className="w-screen h-screen bg-gray-100 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">SkyPulse Weather Dashboard</h1>
      <h1 className="text-2xl font-bold mb-4">Live Weather</h1>

      <div className="flex">
        <LiveWeather city="New York" />
        <LiveWeather city="Paris" />
        <LiveWeather city="London" />
        <LiveWeather city="Amsterdam" />
      </div>
    </div>
  );
}

export default App;
