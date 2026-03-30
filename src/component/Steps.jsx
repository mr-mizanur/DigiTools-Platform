import React from 'react';
import userImage from "../assets/user.png";
import rocetImg from "../assets/rocket.png"
import  packageImg from "../assets/package.png"
const Steps = () => {
    return (
       <div className="max-w-7xl mx-auto px-6 py-16">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-gray-900 mb-3">
      Get Started In 3 Steps
    </h2>
    <p className="text-gray-600 text-lg">
      Start using premium digital tools in minutes, not hours.
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-8">
   
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all">
      <div className="flex justify-end mb-6">
        <div className="w-8 h-8 flex items-center justify-center bg-violet-600 text-white text-sm font-semibold rounded-full">
          01
        </div>
      </div>
      
      <div className="w-20 h-20 mx-auto bg-violet-100 rounded-full flex items-center justify-center mb-6">
        <img src={userImage}  className="w-10 h-10" />
      </div>

      <h3 className="text-xl font-semibold text-center mb-3">Create Account</h3>
      <p className="text-gray-600 text-center">
        Sign up for free in seconds. No credit card required to get started.
      </p>
    </div>

   
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all">
      <div className="flex justify-end mb-6">
        <div className="w-8 h-8 flex items-center justify-center bg-violet-600 text-white text-sm font-semibold rounded-full">
          02
        </div>
      </div>
      
      <div className="w-20 h-20 mx-auto bg-violet-100 rounded-full flex items-center justify-center mb-6">
        <img src={packageImg} className="w-10 h-10" />
      </div>

      <h3 className="text-xl font-semibold text-center mb-3">Choose Products</h3>
      <p className="text-gray-600 text-center">
        Browse our catalog and select the tools that fit your needs.
      </p>
    </div>


    <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all">
      <div className="flex justify-end mb-6">
        <div className="w-8 h-8 flex items-center justify-center bg-violet-600 text-white text-sm font-semibold rounded-full">
          03
        </div>
      </div>
      
      <div className="w-20 h-20 mx-auto bg-violet-100 rounded-full flex items-center justify-center mb-6">
        <img src={rocetImg}  className="w-10 h-10" />
      </div>

      <h3 className="text-xl font-semibold text-center mb-3">Start Creating</h3>
      <p className="text-gray-600 text-center">
        Download and start using your premium tools immediately.
      </p>
    </div>
  </div>
</div>
    );
};

export default Steps;