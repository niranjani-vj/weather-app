<template>
    <div class="max-w-md mx-auto mt-10 p-5 bg-white rounded-lg shadow-lg">
      <h1 class="text-2xl font-bold text-center mb-5">Historical Weather Data</h1>
  
      <div class="mb-4">
        <input
          type="text"
          v-model="city"
          placeholder="Enter city"
          class="border border-gray-300 rounded-lg p-2 w-full mb-3"
        />
        <input
          type="date"
          v-model="fromDate"
          class="border border-gray-300 rounded-lg p-2 w-full mb-3"
        />
        <input
          type="date"
          v-model="toDate"
          class="border border-gray-300 rounded-lg p-2 w-full mb-3"
        />
        <button
          @click="fetchHistoricalWeather"
          class="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Get Historical Weather
        </button>
      </div>
  
      <div v-if="loading" class="text-gray-500 text-center">Loading...</div>
  
      <div v-if="weatherData.length" class="bg-gray-100 p-4 rounded-lg mt-4">
        <h2 class="text-xl font-semibold mb-2">Weather Data for {{ city }}</h2>
        <ul>
          <li v-for="weather in weatherData" :key="weather.date" class="mb-2">
            <strong>Date:</strong> {{ formatDate(weather.date) }} <br />
            <strong>Temperature:</strong> {{ weather.temperature }}°C <br />
            <strong>Condition:</strong> {{ weather.description }}
          </li>
        </ul>
      </div>
  
      <div v-else-if="error" class="text-red-500 mt-4 text-center">{{ error }}</div>
    </div>
  </template>
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        city: '',
        fromDate: '',
        toDate: '',
        weatherData: [],
        loading: false,
        error: null,
      };
    },
    methods: {
      async fetchHistoricalWeather() {
       
        if (!this.city || !this.fromDate || !this.toDate) {
          this.error = 'Please fill in all fields.';
          return;
        }
  
        this.loading = true;
        this.error = null; 
  
        // GraphQL query as a string
        const query = `
          query getHistoricalWeather($city: String!, $from: String!, $to: String!) {
            getHistoricalWeather(city: $city, from: $from, to: $to) {
              city
              date
              temperature
              description
            }
          }
        `;
  
        const variables = {
          city: this.city,
          from: this.fromDate,
          to: this.toDate,
        };
  
        try {
          // Axios POST request to the GraphQL endpoint
          const response = await axios.post('http://localhost:4000/graphql', {
            query,
            variables,
          });
  
          // Handle the response
          const { data } = response.data;
          if (data && data.getHistoricalWeather) {
            this.weatherData = data.getHistoricalWeather;
          } else {
            this.error = 'No weather data found for the selected range.';
          }
        } catch (err) {
          // Handle error response
          this.error = 'Failed to fetch data. Please try again.';
          console.error(err);
        } finally {
          this.loading = false; 
        }
      },
      formatDate(isoDate) {
      if (!isoDate) return '';
      
      const date = new Date(isoDate);
      const day = String(date.getDate()).padStart(2, '0'); 
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear(); // Get full year

      return `${day}-${month}-${year}`; 
    }
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 600px;
  }
  </style>
  