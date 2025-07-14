import { gql, useSubscription } from "@apollo/client";
import { WeatherCard } from "./WeatherCard";

export const WEATHER_SUBSCRIPTION = gql`
  subscription WeatherUpdates($city: String!) {
    weatherUpdates(city: $city) {
      city
      temperature
      humidity
      location
    }
  }
`;

type LiveWeatherProps = {
  city: string;
};

export const LiveWeather = ({ city }: LiveWeatherProps) => {
  const { data, loading } = useSubscription(WEATHER_SUBSCRIPTION, {
    variables: { city },
  });

  if (loading || !data) return <p>Waiting for weather updates...</p>;

  console.log("dataa", data);

  const {
    city: cityName,
    temperature,
    humidity,
    location,
  } = data.weatherUpdates;

  return (
    <div className="p-4">
      <WeatherCard
        city={cityName}
        temperature={Math.round(Number(temperature))}
        humidity={Math.round(humidity)}
        location={location}
      />
    </div>
  );
};
