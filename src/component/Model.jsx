import React, { use } from 'react';
import ModelCard from './ModelCard';

const Model = ({modelPromise ,carts, setCarts}) => {
    const models =use(modelPromise )

    return (
       <div className='className="flex flex-col md:flex-row max-w-7xl mx-auto items-center  px-6 py-10 relative '>
         <div className='text-center p-12'>
            <h2 className='text-4xl font-bold'>Premium Digital Tools</h2>
            <p className=''>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
        </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {models.map((model) => (

   <ModelCard model={model} carts={carts} setCarts={setCarts}></ModelCard>
  ))}
</div>
       </div>
    );
};

export default Model;