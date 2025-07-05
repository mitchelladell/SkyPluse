import { gql, useSubscription } from "@apollo/client";
import { WeatherCard } from "./WeatherCard";

const WEATHER_UPDATES = gql`
  subscription {
    weatherUpdates {
      city
      temperature
      humidity
      location
    }
  }
`;

export default function LiveWeather() {
  const { data, loading } = useSubscription(WEATHER_UPDATES);
  const weather = data?.weatherUpdates;

  if (loading) return <p>Loading live weather...</p>;
  if (!weather) return <p>No data yet</p>;

  return (
    <WeatherCard
      city={weather.city}
      temperature={weather.temperature}
      humidity={weather.humidity}
      location={weather.location}
    />
  );
}
