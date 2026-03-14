import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import axios from "axios";

const App = () => {

  const [weather, setWeather] = useState(null)

  const fetchWeather = async (city) => {

    const res = await axios.get(
      "http://localhost:5000/api/weather/" + city
    );

    setWeather(res.data)
  }

  return (
    <div className="min-h-screen p-5 bg-gradient-to-br from-blue-400 via-sky-300 to-indigo-500">
      <Navbar fetchWeather={fetchWeather} />
      <Main weather={weather} />
    </div>
  )
}

export default App