<template>
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">Weather App</h1>
  
      <div class="mb-4">
        <input v-model="city" placeholder="Enter city" class="border p-2 rounded" />
        <button @click="fetchWeather" class="bg-blue-500 text-white p-2 rounded ml-2">
          Get Weather
        </button>
      </div>
  
      <!-- Display loading state -->
      <div v-if="loading" class="text-gray-500">Loading...</div>
  
      <!-- Display current weather -->
      <div v-if="weather" class="p-4 bg-gray-100 rounded">
        <h2 class="text-xl font-semibold">{{ weather.city }}</h2>
        <p>Temperature: {{ weather.temperature }}°C</p>
        <p>Description: {{ weather.description }}</p>
      </div>
  
      <!-- Display error -->
      <div v-if="error" class="text-red-500 mt-4">{{ error.message }}</div>
    </div>
  </template>
  
  <script>
  import { ref, watch } from 'vue';
  import { useQuery } from '@vue/apollo-composable';  // Import useQuery
  import GET_WEATHER from '../queries/getWeather.gql';  // Ensure correct import
  
  export default {
    setup() {
      const city = ref('');
      const weather = ref(null);
      const error = ref(null);
      const loading = ref(false);
  
    //   // Initialize useQuery with skip to control execution
    //   const { result, loading: queryLoading } = useQuery(GET_WEATHER, {
    //     variables: { city: city.value },
    //     skip: !city.value, // Skip execution until a city is provided
    //   });
  
      // Initialize useQuery with skip to control execution
      const { result, loading: queryLoading } = useQuery(GET_WEATHER, {
        variables: { city: city.value },
        skip: !city.value, // Skip execution until a city is provided
      });
  
      // Watch the result to update local state
      watch(result, (data) => {
        if (data && data.value && data.value.getWeather) {
          weather.value = data.value.getWeather; // Access the data directly
          error.value = null; // Clear any previous errors
        } else {
          error.value = new Error('Weather not found for this city.'); // Handle case where data is null
        }
      });
  
      // Watch the loading state
      loading.value = queryLoading; 
  
      const fetchWeather = () => {
        if (!city.value) {
          error.value = new Error('Please enter a city');
        }
        // No need for self-assignment
      };
  
      return {
        city,
        weather,
        error,
        loading,
        fetchWeather,
      };
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 600px;
  }
  </style>
  