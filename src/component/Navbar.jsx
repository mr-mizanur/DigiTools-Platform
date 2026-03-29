import React, { useState } from "react";
      
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
 const [open, setOpen] = useState(false);

 return (
   <div className="w-full bg-gray-100 border-b">
     <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 relative">

     
       <div className="text-2xl font-bold text-purple-600">
         DigiTools
       </div>

      
       <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium ">
         <li><a href="#">Products</a></li>
         <li><a href="#">Features</a></li>
         <li><a href="#">Pricing</a></li>
         <li><a href="#">Testimonials</a></li>
         <li><a href="#">FAQ</a></li>
       </ul>

    
       <div className="flex items-center gap-4">

       
         <a href="#" className="hidden md:block text-gray-700">
         <i class="bi bi-bag"></i>  Login
         </a>

       
         <button className="hidden md:block bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full">
           Get Started
         </button>

  

<button
  onClick={() => setOpen(!open)}
  className="md:hidden  p-2 rounded"
>
  {open ? (
    <FaTimes className="text-black text-2xl" />
  ) : (
    <FaBars className="text-black text-2xl" />
  )}
</button>
       </div>

      
       <div
         className={`absolute top-16 left-0 w-full bg-white shadow-md md:hidden transition-all duration-300 ${
           open ? "opacity-100 visible" : "opacity-0 invisible"
         }`}
       >
         <ul className="flex flex-col items-center gap-5 py-5 text-lg font-medium text-black">
           <li className="text-black" ><a href="#" className="text-black" >Products</a></li>
           <li><a href="#" className="text-black" >Features</a></li>
           <li><a href="#" className="text-black" >Pricing</a></li>
           <li><a href="#" className="text-black" >Testimonials</a></li>
           <li><a href="#" className="text-black" >FAQ</a></li>
           <li><a href="#" className="text-black" >Login</a></li>

           <li>
             <button className="bg-black text-white px-5 py-2 rounded-full">
               Get Started
             </button>
           </li>
         </ul>
       </div>

     </div>
   </div>
 );
};

export default Navbar;
