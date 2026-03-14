import React, { useState } from "react";
import axios from "axios";
import {LocateFixed, Search} from "lucide-react"

const Navbar = ({fetchWeather}) => {


 const[city, setCity] = useState("");
 
 const handleSearch = async(e) => {
 if(e.key === "Enter") {
  
  fetchWeather(city)  
 }
 }

  return (
    <div>
      <div className="w-full p-2 bg-white/30 backdrop-blur-md shadow-md rounded-xl border border-white/20 flex  items-center  justify-between">

     
           <h2 className="text-xl font-semibold cursor-pointer">WeatherApp</h2>


           <div className= " flex items-center justify-center bg-white/30 backdrop-blur-md rounded-lg p-3 gap-2 w-40 "  >
         <LocateFixed size={19} />
         <span className={city ? "text-gray-500" : "text-red-500 font-bold"}>
  {city || "No Country"}
</span>

</div>
      <div className="flex items-center bg-white/30 backdrop-blur-md rounded-lg p-3 gap-2 " >
      <Search size={18} />

       

       <input 
       type = "text"
       value={city   }
       onChange={(e) => setCity(e.target.value)}
       onKeyDown={handleSearch}
       placeholder="Search Location..."
       className="bg-transparent outline-none text-gray-400 w-80"
       />
       </div>

      </div>
    </div>
  );
};

export default Navbar;

