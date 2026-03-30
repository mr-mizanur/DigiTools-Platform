import React from 'react';

const Workflow = () => {
    return (
       <div className="bg-gradient-to-br from-violet-600 to-purple-700 text-white py-20 px-6 text-center">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-5xl font-bold mb-6">Ready To Transform Your Workflow?</h2>
    
    <p className="text-violet-100 text-xl mb-10">
      Join thousands of professionals who are already using Digitools to work smarter.<br />
      Start your free trial today.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button className="btn btn-lg btn-wide bg-white text-violet-700 hover:bg-violet-50 border-0">
        Explore Products
      </button>
      <button className="btn btn-lg btn-wide btn-outline text-white border-white hover:bg-white hover:text-violet-700">
        View Pricing
      </button>
    </div>

    <p className="text-violet-200 mt-8">
      14-day free trial • No credit card required • Cancel anytime
    </p>
  </div>
</div>
    );
};

export default Workflow;