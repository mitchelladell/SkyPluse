import { WeatherCard } from "./components/stories/WeatherCard";

function App() {
  return (
    <div className="w-screen h-screen bg-gray-100 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">SkyPulse Weather Dashboard</h1>

      <WeatherCard
        city="New York"
        temperature={25}
        humidity={55}
        location="40.7128° N, 74.0060° W"
      />
    </div>
  );
}

export default App;
