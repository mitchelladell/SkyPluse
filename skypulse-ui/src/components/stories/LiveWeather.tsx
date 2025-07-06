import { gql, useSubscription } from "@apollo/client";
import { WeatherCard } from "./WeatherCard";

const WEATHER_SUBSCRIPTION = gql`
  subscription {
    weatherUpdates {
      city
      temperature
      humidity
    }
  }
`;

export const LiveWeather = () => {
  const { data, loading } = useSubscription(WEATHER_SUBSCRIPTION);
  console.log("data", data);

  if (loading || !data) return <p>Waiting for weather updates...</p>;

  const { city, temperature, humidity, location } = data.weatherUpdates;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Live Weather</h1>
      <WeatherCard
        city={city}
        temperature={Math.round(temperature)}
        humidity={Math.round(humidity)}
        location={location}
      />
    </div>
  );
};
