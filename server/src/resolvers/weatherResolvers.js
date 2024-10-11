const Weather = require('../models/Weather');
const { getWeatherData } = require('../services/weatherService');

const resolvers = {
  Query: {
    getWeather: async (_, { city }) => {
      const weatherData = await getWeatherData(city);
      const weather = new Weather({
        city,
        date: new Date(),
        temperature: weatherData.temp,
        description: weatherData.description,
      });
      await weather.save();

      return {
        city,
        date: new Date().toISOString(),
        temperature: weatherData.temp,
        description: weatherData.description,
      };
    },
    getHistoricalWeather: async (_, { city, from, to }) => {
      const fromDate = new Date(from).setUTCHours(0, 0, 0, 0);
      const toDate = new Date(to).setUTCHours(23, 59, 59, 999);

      const weatherRecords = await Weather.find({
        city,
        date: { $gte: new Date(fromDate), $lte: new Date(toDate) },
      });

      return weatherRecords.map(record => ({
        city: record.city,
        date: record.date.toISOString(),
        temperature: record.temperature,
        description: record.description,
      }));
    },
  },
};

module.exports = resolvers;
