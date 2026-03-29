import React from 'react';
import BannerImage from "../assets/banner.png";
import PlayImage from "../assets/Play.png"
const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto items-center  px-6 py-10 relative justify-between">
  
 
  <div className="md:max-w-lg w-full mb-10 md:mb-0">
    
   
    <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-5 py-2 rounded-full text-sm font-medium mb-6">
      <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
      New: AI-Powered Tools Available
    </div>

   
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900 mb-6">
      Supercharge Your <br />
      Digital Workflow
    </h1>

   
    <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
      Access premium AI tools, design assets, templates, and productivity 
      software—all in one place. Start creating faster today.
    </p>

    
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all w-full sm:w-auto text-center">
        Explore Products
      </button>

      <button className="border border-purple-600 hover:bg-purple-50 text-purple-600 px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 w-full sm:w-auto justify-center">
        <span className="text-xl"><img src={PlayImage} alt="" /></span> Watch Demo
      </button>
    </div>
  </div>

 
  <div className="p-12">
    <img src={BannerImage} className=" w-[400px] object-contain"/>
  </div>

</div>
    );
};

export default Banner;