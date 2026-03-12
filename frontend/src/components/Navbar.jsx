import React from "react";
import {LocateFixed, Search} from "lucide-react"

const Navbar = () => {
  return (
    <div>
      <div className="w-full p-2 bg-white/30 backdrop-blur-md shadow-md rounded-xl border border-white/20 flex  items-center  justify-between">

     
           <h2 className="text-xl font-semibold cursor-pointer">WeatherApp</h2>


           <div className= " flex items-center justify-center bg-white/30 backdrop-blur-md rounded-lg p-3 gap-2 w-40 "  >
         <LocateFixed size={19} />
           <span className="text-gray-500" >Delhi, India</span>

</div>
      <div className="flex items-center bg-white/30 backdrop-blur-md rounded-lg p-3 gap-2 " >
      <Search size={18} />

      

       <input 
       type = "text"
       placeholder="Search Location..."
       className="bg-transparent outline-none text-gray-400 w-80"
       />
       </div>

      </div>
    </div>
  );
};

export default Navbar;

