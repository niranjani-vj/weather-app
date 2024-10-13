<template>
    <div class="max-w-md mx-auto mt-10 p-5 bg-white rounded-lg shadow-lg">
      <h1 class="text-2xl font-bold text-center mb-5">Weather App</h1>
      <div class="flex items-center justify-center mb-4">
        <input
          type="text"
          v-model="city"
          placeholder="Enter city"
          class="border border-gray-300 rounded-lg p-2 w-2/3"
        />
        <button
          @click="fetchWeather"
          class="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Get Weather
        </button>
      </div>
  
      <div v-if="weather" class="bg-gray-100 p-4 rounded-lg">
        <h2 class="text-xl font-semibold mb-2">Today</h2>
        <p class="text-lg">Temperature: {{ weather.temperature }}°C</p>
        <p class="text-lg">Condition: {{ weather.description }}</p>
        <p class="text-lg">Location: {{ weather.city }}</p>
        <img :src="getWeatherImage(weather.temperature)" alt="Weather Icon" class="mt-3 w-24 mx-auto" />
      </div>
    </div>
  </template>

  
  
  
  <script>
  import axios from 'axios';

  export default {
    data() {
      return {
        city: '',
        weather: null,
        loading: false,
        error: null,
      };
    },
    methods: {
      async fetchWeather() {
        this.loading = true;
        this.error = null;
        this.weather = null; 
        const query = `
          query getWeather($city: String!) {
            getWeather(city: $city) {
              city
              temperature
              description
            }
          }
        `;
  
        try {
          const response = await axios.post('http://localhost:4000/graphql', {
            query: query,
            variables: {
              city: this.city,
            },
          });
          
          this.weather = response.data.data.getWeather;
        } catch (err) {
          this.error = err.response ? err.response.data.message : err.message;
        } finally {
          this.loading = false;
        }
      },
      getWeatherImage(temperature) {
        if (temperature < 0) {
            return require('@/assets/snow.png'); // Image for cold weather
        } else if (temperature >= 0 && temperature < 15) {
            return require('@/assets/cloudy.png'); // Image for cool weather
        } else if (temperature >= 15 && temperature < 30) {
            return require('@/assets/clearsky.png'); // Image for mild weather
        }else if (temperature > 30 && temperature <= 40) {
            return require('@/assets/sun.png'); // Image for mild weather
        }else {
            return require('@/assets/clearsky.png'); // Image for hot weather
        }
    },
    // },
//     getWeatherIcon(description) {
//         console.log(typeof description);
//         if (!description || typeof description !== 'string') {
//     return ''; // Return a default class or empty if not valid
//   }
//       // Map weather conditions to glyphicon classes
//       switch (description.toLowerCase()) {
//         case 'clear sky':
//           return 'glyphicon glyphicon-sun';
//         case 'light rain':
//         case 'shower':
//           return 'glyphicon glyphicon-cloud';
//         case 'snow':
//           return 'glyphicon glyphicon-snowflake';
//         case 'fog':
//           return 'glyphicon glyphicon-cloud';
//         case 'thunderstorm':
//           return 'glyphicon glyphicon-flash';
//         default:
//           return 'glyphicon glyphicon-flash'; // Default case for unrecognized conditions
//       }
//     },
  },
  };
  </script>
  
    
  <style scoped>
.app-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.title {
  font-size: 2rem;
  margin-bottom: 20px;
}

.input {
  padding: 10px;
  margin-bottom: 10px;
  width: 80%;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.button {
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #218838;
}

.loading {
  font-size: 1.2rem;
  color: #007bff;
}

.weather-info {
  margin-top: 20px;
}

.weather-title {
  font-size: 1.5rem;
}

.description {
  font-size: 1.2rem;
}

.weather-icon {
  width: 100px; /* Adjust size as needed */
  margin-top: 10px;
}
  </style>
  