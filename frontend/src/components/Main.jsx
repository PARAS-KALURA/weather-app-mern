import React from 'react'

const Main = ({weather}) => {
  return (
    <div className='min-h-screen bg-white/30 backdrop-blur-md shadow-md p-6 mt-4 rounded-xl'>
      <div className="grid grid-cols-5 gap-6 items-start">

        {/* LEFT SECTION */}

       <div className=' col-span-3 p-4 rounded-xl min-h-screen' >
       
       {/* 1 */}
       <div className="bg-white/20 rounded-2xl p-6">

  <h2 className="text-lg font-semibold mb-4">Current Weather</h2>

  {weather && (
    <div className="flex flex-col gap-2">

      <h3 className="text-xl font-semibold">{weather.city}</h3>

      <p className="text-5xl font-bold">
        {Math.round(weather.temperature)}°C
      </p>

      <p className="text-gray-700 capitalize">
        {weather.weather}
      </p>

      <p className="text-gray-600">
        Humidity: {weather.humidity}%
      </p>

    </div>
  )}

</div>

      {/* 2 */}

       <div className='grid grid-cols-3 gap-4 mt-4'>

        <div className='p-4 bg-white/20 rounded-xl'><p className='font-semibold' >Wind Speed</p> {weather && (<p className='text-gray-600' >{weather.speed} km/h 💨 </p>) } </div>
        <div className='p-4 bg-white/20 rounded-xl'><p className='font-semibold' >Humidity</p>
        {weather && (
          <p className='text-gray-600' >{(weather.humidity)}%</p>
         )}

        </div>
        <div className='p-4 bg-white/20 rounded-xl'><p className='font-semibold' >Maximum Temperature</p>   
        {weather && (<p className='text-gray-600' >{(weather.MinTemp)}°C</p>) }
        </div>
        <div className='p-4 bg-white/20 rounded-xl'>
  <p className='font-semibold' >Visibility</p>

  {weather && (
    <p className='text-gray-600' >{(weather.visibility / 1000).toFixed(1)} km</p>
  )}

</div>
        <div className='p-4 bg-white/20 rounded-xl'><p className='font-semibold'>Feels Like</p>{weather && (<p className='text-gray-600' >{weather.feels_like}°C</p>) } </div>
        <div className='p-4 bg-white/20 rounded-xl'><p className='font-semibold' >Country</p> {weather && (<p className='text-gray-600'>{weather.country}</p>) } </div>

       </div>

       {/* 3 */}

       <div className='bg-white/20 mt-4 h-50 rounded-xl p-3' >Sun & Moon</div>

       </div>
       
        {/* RIGHT SECTION */}
        <div className="bg-white/20 col-span-2 p-4 rounded-xl min-h-screen">
          Right content
        </div>

      </div>
    </div>
  )
}

export default Main