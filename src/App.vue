<template>
  <div id="app" class="bg-gray-100 min-h-screen flex items-center justify-center">
    <div class="max-w-md w-full">
      <h1 class="text-3xl font-bold text-center mb-6">Weather Application</h1>
      <WeatherComponent />  <!-- Include the WeatherComponent -->
    </div>
  </div>
</template>

<script>
import WeatherComponent from './components/WeatherComponent.vue';  // Import WeatherComponent

export default {
  name: 'App',
  components: {
    WeatherComponent,  // Register WeatherComponent
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
