# Weather App

A simple weather application that provides current weather information and historical weather data for specified cities using GraphQL, Apollo Server, Express, and MongoDB.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Fetch current weather data for a specified city.
- Retrieve historical weather data for a specified city within a date range.
- Store weather data in a MongoDB database.

## Technologies Used

- **Node.js**: JavaScript runtime for building the application.
- **Express**: Web framework for building the API.
- **Apollo Server**: GraphQL server for handling requests.
- **MongoDB**: NoSQL database for storing weather data.
- **Mongoose**: ODM library for MongoDB.
- **Axios**: HTTP client for making API requests.
- **CORS**: Middleware for enabling Cross-Origin Resource Sharing.
- **dotenv**: Module for loading environment variables from a `.env` file.

## Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```


2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**  
Create a `.env` file in the `src` directory and add your API key and MongoDB URI:
```env
OPENWEATHERMAP_API_KEY=your_api_key_here
MONGODB_URI=mongodb://localhost/weatherapp
```

4. **Start the MongoDB server:**
Ensure you have MongoDB running on your local machine or use a cloud MongoDB instance.

5. **Run the application:**

```node src/index.js```

The server will start at http://localhost:4000/graphql.

##API Endpoints

##Queries

Get Current Weather
Fetches the current weather data for a specified city.

#GraphQL Query:

```
query {
  getWeather(city: "CityName") {
    city
    date
    temperature
    description
  }
}```

#Get Historical Weather
Fetches historical weather data for a specified city within a given date range.

#GraphQL Query:

```
query {
  getHistoricalWeather(city: "CityName", from: "YYYY-MM-DD", to: "YYYY-MM-DD") {
    city
    date
    temperature
    description
  }
}```

##License
This project is licensed under the MIT License - see the LICENSE file for details.

vbnet
Copy code

### Instructions to Save
1. Copy the above markdown content.
2. Paste it into the appropriate section of your existing `README.md` file or create a new file as needed.
3. Save the file.


## Frontend Setup (Vue.js)

This section describes how to set up and run the frontend of the Weather App using Vue.js.

### Prerequisites

- Node.js (version 12 or higher)
- Vue CLI (install globally if not already installed):
  ```bash
  npm install -g @vue/cli
```
  ###Installation Steps
  
##Navigate to the Frontend Directory:

Install Dependencies:
```
npm install
```
Set Up Environment Variables: Create a .env file in the client directory and add your GraphQL server URL:

```
VUE_APP_GRAPHQL_SERVER=http://localhost:4000/graphql
 ```
Run the Application: Start the Vue development server:

```
npm run serve
```
The frontend will be available at http://localhost:8080.

###Features
Current Weather View: A form to input a city name and fetch current weather data.
Historical Weather View: A form to input a city name and select a date range to fetch historical weather data.

##Example Queries
To interact with the GraphQL API, you can use the following sample queries:

#Get Current Weather
You can fetch current weather data for a specified city using the Apollo Client in your Vue components. Here’s a sample GraphQL query:

```
const GET_CURRENT_WEATHER = gql`
  query getWeather($city: String!) {
    getWeather(city: $city) {
      city
      date
      temperature
      description
    }
  }
`;
```
#Get Historical Weather

Similarly, you can retrieve historical weather data:


```
const GET_HISTORICAL_WEATHER = gql`
  query getHistoricalWeather($city: String!, $from: String!, $to: String!) {
    getHistoricalWeather(city: $city, from: $from, to: $to) {
      city
      date
      temperature
      description
    }
  }
`;

```
###License

This project is licensed under the MIT License - see the LICENSE file for details.

``
### Instructions to Save
1. Add this section to your existing `README.md` file under a new heading titled **Frontend Setup (Vue.js)**.
2. Make sure to adjust any specific paths, commands, or details that relate to your project's structure.
``