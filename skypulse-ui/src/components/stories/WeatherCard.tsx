// WeatherCard.tsx
interface WeatherCardProps {
  city: string;
  temperature: number;
  humidity: number;
  location: string;
}

export const WeatherCard = ({
  city,
  temperature,
  humidity,
  location,
}: WeatherCardProps) => (
  <div className="p-4 rounded shadow bg-white dark:bg-gray-800">
    <h2 className="text-xl font-bold">{city}</h2>
    <p>🌡 Temp: {temperature}°C</p>
    <p>💧 Humidity: {humidity}%</p>
    <p>💧 Country: {location}</p>
  </div>
);
