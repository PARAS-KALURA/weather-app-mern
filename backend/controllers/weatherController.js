const axios = require("axios");
const NodeCache = require("node-cache"); // creating cache


const cache = new NodeCache({stdTTL: 300}) // Create cache storage
// Store data for 300 seconds (5 minutes)

const getWeather = async (req, res) => {
  try {
    const city = req.params.city;

    const cachedData = cache.get(city); 

    if(cachedData) {
      console.log("Serving from cache");
      
     return res.json(cachedData);
    }
    
    const apiKey = process.env.WEATHER_API_KEY;

    
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

     const weatherData =  ({
       city: response.data.name,
       temperature: response.data.main.temp,
       humidity: response.data.main.humidity,
       weather: response.data.weather[0].description
    });

    cache.set(city, weatherData);

    console.log("serving from API");
    

    res.json(weatherData); // sending data from server to client in JSon


  } catch (error) {
    console.log(error.response?.data || error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { getWeather };