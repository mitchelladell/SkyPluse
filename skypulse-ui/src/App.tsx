import { LiveWeather } from "./components/stories/LiveWeather";
import { DropDownSelect } from "./components/stories/DropDownSelect";
import { useState } from "react";
import { useQuery, useSubscription } from "@apollo/client";
import { gql } from "@apollo/client";

function App() {
  const [selectedCity, setSelectedCity] = useState<string | null>();

  console.log("selectedCity", selectedCity);
  return (
    <div className="w-screen h-screen bg-gray-100 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">SkyPulse Weather Dashboard</h1>

      <DropDownSelect
        onChange={(selected) => setSelectedCity(selected?.value ?? null)}
      />
      <h1 className="text-2xl font-bold mb-4">Live Weather</h1>

      {selectedCity && (
        <div>
          <LiveWeather city={selectedCity} />
        </div>
      )}
    </div>
  );
}

export default App;
