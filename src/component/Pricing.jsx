import React from 'react';
import { BiCheck } from 'react-icons/bi';

const Pricing = () => {
    return (
       <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-600 text-lg">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
    
      <div className="grid md:grid-cols-3 gap-8">
       
        <div className="bg-white rounded-3xl p-8 border border-gray-200 flex flex-col">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Starter</h3>
            <p className="text-gray-500 mt-1">Perfect for getting started</p>
          </div>
    
          <div className="mt-8 mb-8">
            <span className="text-5xl font-bold text-gray-900">$0</span>
            <span className="text-gray-500">/Month</span>
          </div>
    
          <ul className="space-y-4 mb-10 flex-1">
            <li className="flex items-center gap-3">
              <span className="text-green-500"><BiCheck></BiCheck></span>
              Access to 10 free tools
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-500"><BiCheck></BiCheck></span>
              Basic templates
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-500"><BiCheck></BiCheck></span>
              Community support
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-500"><BiCheck></BiCheck></span>
              1 project per month
            </li>
          </ul>
    
          <button className="mt-auto w-full py-4 rounded-full bg-violet-600 hover:bg-violet-700 text-white font-medium transition-colors">
            Get Started Free
          </button>
        </div>
    
       
        <div className="bg-gradient-to-b from-violet-600 to-violet-700 text-white rounded-3xl p-8 flex flex-col relative shadow-xl scale-105">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <span className="bg-amber-400 text-amber-900 text-xs font-semibold px-6 py-1.5 rounded-full">
              Most Popular
            </span>
          </div>
    
          <div>
            <h3 className="text-2xl font-semibold">Pro</h3>
            <p className="text-violet-200 mt-1">Best for professionals</p>
          </div>
    
          <div className="mt-8 mb-8">
            <span className="text-5xl font-bold">$29</span>
            <span className="text-violet-200">/Month</span>
          </div>
    
          <ul className="space-y-4 mb-10 flex-1">
            <li className="flex items-center gap-3">
              <span className="text-white"> <BiCheck></BiCheck> </span>
              Access to all premium tools
            </li>
            <li className="flex items-center gap-3">
              <span className="text-white"><BiCheck></BiCheck></span>
              Unlimited templates
            </li>
            <li className="flex items-center gap-3">
              <span className="text-white"><BiCheck></BiCheck></span>
              Priority support
            </li>
            <li className="flex items-center gap-3">
              <span className="text-white"><BiCheck></BiCheck></span>
              Unlimited projects
            </li>
            <li className="flex items-center gap-3">
              <span className="text-white"><BiCheck></BiCheck></span>
              Cloud sync
            </li>
            <li className="flex items-center gap-3">
              <span className="text-white"><BiCheck></BiCheck></span>
              Advanced analytics
            </li>
          </ul>
    
          <button className="mt-auto w-full py-4 rounded-full bg-white text-violet-700 font-medium hover:bg-gray-100 transition-colors">
            Start Pro Trial
          </button>
        </div>
    
       
        <div className="bg-white rounded-3xl p-8 border border-gray-200 flex flex-col">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Enterprise</h3>
            <p className="text-gray-500 mt-1">For teams and businesses</p>
          </div>
    
          <div className="mt-8 mb-8">
            <span className="text-5xl font-bold text-gray-900">$99</span>
            <span className="text-gray-500">/Month</span>
          </div>
    
          <ul className="space-y-4 mb-10 flex-1">
            <li className="flex items-center gap-3">
              <span className="text-green-500"><BiCheck></BiCheck></span>
              Everything in Pro
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-500"><BiCheck></BiCheck></span>
              Team collaboration
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-500"><BiCheck></BiCheck></span>
              Custom integrations
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-500"><BiCheck></BiCheck></span>
              Dedicated support
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-500"><BiCheck></BiCheck></span>
              SLA guarantee
            </li>
            <li className="flex items-center gap-3">
              <span className="text-green-500"><BiCheck></BiCheck></span>
              Custom branding
            </li>
          </ul>
    
          <button className="mt-auto w-full py-4 rounded-full bg-violet-600 hover:bg-violet-700 text-white font-medium transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
     </div>
        );
     };    
    
export default Pricing;