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
  <div className="w-80 h-40 p-4 rounded-2xl shadow-md bg-white dark:bg-gray-800 flex flex-col justify-between">
    <h2 className="text-xl font-bold">{city}</h2>
    <div>
      <p>🌡 Temp: {temperature}°C</p>
      <p>💧 Humidity: {humidity}%</p>
      <p>🌍 Country: {location}</p>
    </div>
  </div>
);
