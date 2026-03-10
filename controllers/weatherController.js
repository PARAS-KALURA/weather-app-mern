const axios = require("axios");

const getWeather = async (req, res) => {
  try {
    const city = req.params.city;
    console.log("City:",city);
    
    const apiKey = process.env.WEATHER_API_KEY;

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    res.json({
       city: response.data.name,
       temperature: response.data.main.temp,
       humidity: response.data.main.humidity,
       weather: response.data.weather[0].description
    });

  } catch (error) {
    console.log(error.response?.data || error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { getWeather };