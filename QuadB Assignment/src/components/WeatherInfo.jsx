import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WeatherInfo = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          setError('Failed to get user location');
        }
      );
    } else {
      setError('Geolocation is not supported by this browser');
    }
  }, []);

  useEffect(() => {
    if (location.latitude && location.longitude) {
      const fetchWeather = async () => {
        try {
          const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${encodeURIComponent(location.latitude)}&longitude=${encodeURIComponent(location.longitude)}&hourly=temperature_2m`);
          setWeather(response.data);
        } catch (err) {
          setError('Failed to fetch weather data');
        }
      };

      fetchWeather();
    }
  }, [location]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="weather-info">
      {weather ? (
        <div>
          <p>Temperature: {weather.hourly.temperature_2m[0]}°C</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherInfo;
