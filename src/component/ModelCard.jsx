import React, { useState } from 'react';

const ModelCard = ({model , carts, setCarts}) => {
      const [isBuy,setBuy] =useState(false)
      
      const handleBuy = ()=>{
        setBuy(true)
        setCarts([...carts,model])
      }
        
      

   
    return (
        <div>
             <div
      key={model.id}
      className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all flex flex-col"
    >
     
      <div className="flex justify-between items-start mb-4">
        <img className='w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center text-4xl' src={model.icon} alt="" />
        
        {model.tagType && (
          <span className={`px-4 py-1 text-xs font-semibold rounded-full 
            ${model.tagColor || 'bg-yellow-100 text-yellow-700'}`}>
            {model.tagType}
          </span>
        )}
      </div>

     
      <h2 className="text-xl font-bold text-gray-900 mb-2">{model.name}</h2>

      
      <p className="text-gray-600 text-sm mb-6 flex-grow">
        {model.description}
      </p>

     
      <div className="mb-6">
        <span className="text-3xl font-bold">{model.price}</span>
        <span className="text-gray-500">/{model.period}</span>
      </div>

      
      <ul className="space-y-2 mb-8 text-sm text-gray-700">
        {model.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2 mt-0.5">✔</span>
            {feature}
          </li>
        ))}
      </ul>

      
      <button onClick={handleBuy} className="mt-auto w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold py-3.5 rounded-2xl transition-all">
       {isBuy ? "Bought" : "Buy now"}
      </button>
    </div>
        </div>
    );
};

export default ModelCard;