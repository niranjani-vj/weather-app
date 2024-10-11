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

Run the application:

```
node src/index.js```

The server will start at http://localhost:4000/graphql.
