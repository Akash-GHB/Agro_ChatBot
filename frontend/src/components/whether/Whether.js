import React, { useState, useEffect } from "react";
import {
  MapPin,
  Thermometer,
  Wind,
  Droplet,
  Sun,
  Cloud,
  CloudRain,
  CloudLightning,
} from "lucide-react";

// Helper function to get the appropriate weather icon
const getWeatherIcon = (condition) => {
  const lowerCaseCondition = condition.toLowerCase();
  if (lowerCaseCondition.includes("rain")) return <CloudRain size={48} className="text-blue-500" />;
  if (lowerCaseCondition.includes("cloud")) return <Cloud size={48} className="text-gray-500" />;
  if (lowerCaseCondition.includes("storm")) return <CloudLightning size={48} className="text-yellow-500" />;
  return <Sun size={48} className="text-orange-500" />;
};

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      setLoading(true);
      setError(null);
      try {
        // --- REAL API CALL (EXAMPLE) ---
        // const API_KEY = "YOUR_REAL_API_KEY"; // <-- REPLACE WITH YOUR API KEY
        // const city = "Kochi";
        // const response = await fetch(https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric);
        // if (!response.ok) {
        //   throw new Error("Failed to fetch weather data.");
        // }
        // const data = await response.json();
        // setWeatherData(data); // <-- Set real data here

        // --- MOCK DATA FOR DEMONSTRATION ---
        // To avoid making a real API call for this example, we'll use mock data.
        // This simulates a successful API response.
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate loading
        const mockData = {
          city: { name: "Kottayam", country: "IN" },
          current: {
            temp: 29,
            condition: "Partly Cloudy",
            humidity: 82,
            wind_speed: 10,
          },
          forecast: [
            { day: "Mon", temp_high: 31, temp_low: 25, condition: "Light Rain" },
            { day: "Tue", temp_high: 30, temp_low: 24, condition: "Thunderstorm" },
            { day: "Wed", temp_high: 32, temp_low: 26, condition: "Sunny" },
            { day: "Thu", temp_high: 31, temp_low: 25, condition: "Partly Cloudy" },
            { day: "Fri", temp_high: 29, temp_low: 24, condition: "Heavy Rain" },
          ],
        };
        setWeatherData(mockData);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []); // Empty dependency array means this runs once on component mount

  if (loading) {
    return <div className="flex-1 p-8 text-center">Loading weather data...</div>;
  }

  if (error) {
    return <div className="flex-1 p-8 text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="flex-1 p-8 bg-gradient-to-br from-green-50 to-green-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
          Weather Forecast
        </h1>

        {weatherData && (
          <>
            {/* Current Weather Section */}
            <div className="bg-white p-8 rounded-2xl shadow-md mb-8">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                    <MapPin size={24} className="mr-2 text-green-600" />
                    {weatherData.city.name}, {weatherData.city.country}
                  </h2>
                  <p className="text-gray-500">{weatherData.current.condition}</p>
                </div>
                <div className="text-right">
                  {getWeatherIcon(weatherData.current.condition)}
                </div>
              </div>
              <div className="mt-6 flex items-end justify-between">
                <p className="text-6xl font-bold text-gray-800">
                  {weatherData.current.temp}°C
                </p>
                <div className="text-right text-gray-600">
                  <p className="flex items-center justify-end"><Droplet size={16} className="mr-2" /> Humidity: {weatherData.current.humidity}%</p>
                  <p className="flex items-center justify-end"><Wind size={16} className="mr-2" /> Wind: {weatherData.current.wind_speed} km/h</p>
                </div>
              </div>
            </div>

            {/* 5-Day Forecast Section */}
            <div className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">5-Day Forecast</h3>
                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center">
                    {weatherData.forecast.map((day, index) => (
                        <div key={index} className="bg-green-50 p-4 rounded-lg">
                            <p className="font-bold text-gray-700">{day.day}</p>
                            <div className="my-2 flex justify-center">
                                {getWeatherIcon(day.condition)}
                            </div>
                            <p className="text-lg font-semibold text-gray-800">{day.temp_high}°</p>
                            <p className="text-sm text-gray-500">{day.temp_low}°</p>
                        </div>
                    ))}
                 </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Weather;