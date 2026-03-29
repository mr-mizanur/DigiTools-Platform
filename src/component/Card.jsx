import React from 'react';

const Card = ({carts}) => {
   
    const totalPrice = carts.reduce((sum,item)=> sum + item.price ,0)
  return (
       <div className="max-w-lg mx-auto bg-white rounded-3xl shadow-sm border p-8">
 
  <h1 className="text-2xl font-semibold text-gray-900 mb-6">Your Cart</h1>


  <div className="space-y-3 mb-8">
    {carts.map((item) => (
      <div
        key={item.id}
        className="flex items-center justify-between bg-gray-50 rounded-2xl p-4"
      >
        <div className="flex items-center gap-4">
         
          <img className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm" src={item.icon} alt="" />

          <div>
            <h2 className="font-medium text-gray-900">{item.name}</h2>
            <p className="text-gray-600 font-medium">{item.price}</p>
          </div>
        </div>

       
        <button 
         
          className="text-pink-600 hover:text-pink-700 font-medium text-sm transition-colors"
        >
          Remove
        </button>
      </div>
    ))}
  </div>
  <div className="flex justify-between items-center mb-8">
    <span className="text-gray-600">Total:</span>
    <span className="text-2xl font-bold text-gray-900">
      {totalPrice}
    </span>

   
  </div>
   <button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold py-4 rounded-2xl transition-all active:scale-[0.985]">
    Proceed To Checkout
   </button>
</div>
  );
};

export default Card;