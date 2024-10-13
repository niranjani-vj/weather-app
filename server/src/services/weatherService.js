const axios = require('axios');
require('dotenv').config();  // Load environment variables

const getWeatherData = async (city) => {
  const apiKey = process.env.OPENWEATHERMAP_API_KEY;
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
  if(response.data.cod==200){
    const { temp } = response.data.main;
    const description = response.data.weather[0].description;
    return { temp, description };
  }
};

module.exports = { getWeatherData };
