import axios from 'axios';

// Function to fetch weather data
export const fetchWeatherData = async (latitude, longitude) => {
  try {
    const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${encodeURIComponent(latitude)}&longitude=${encodeURIComponent(longitude)}&hourly=temperature_2m`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch weather data');
  }
};

// Function to fetch other API data (example)
export const fetchApiData = async () => {
  try {
    const response = await axios.get('https://api.example.com/data');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch API data');
  }
};
