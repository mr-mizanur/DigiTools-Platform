import React from 'react';

const StatsSection = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-purple-700 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between text-white">
          
          
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">50K+</h2>
            <p className="text-lg mt-2 opacity-90">Active Users</p>
          </div>

         
          <div className="hidden md:block h-16 w-px bg-white/30"></div>

          
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">200+</h2>
            <p className="text-lg mt-2 opacity-90">Premium Tools</p>
          </div>

         
          <div className="hidden md:block h-16 w-px bg-white/30"></div>

          
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">4.9</h2>
            <p className="text-lg mt-2 opacity-90">Rating</p>
          </div>

        </div>
      </div>

     
      

     
    </div>
  );
};

export default StatsSection;