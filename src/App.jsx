import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'
import Navbar from './component/Navbar'
import Banner from './component/Banner';
import BannerFoot from './component/BannerFoot';
import Model from './component/Model';
import Card from './component/Card';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Steps from './component/Steps';
import Pricing from './component/Pricing';
import Workflow from './component/Workflow';
import Footer from './component/Footer';

const getModel = async()=>{
  const res = await fetch("/model.json")
  return res.json()
}
const modelPromise =getModel()

function App() {
 
 const [activTab, setActiveTab] =useState("model")
 const [carts, setCarts] = useState([])

console.log(carts)

  return (
    <>
    
    <Navbar></Navbar>
    <Banner></Banner>
    <BannerFoot></BannerFoot>
     
     <div>
        <div>

     
       <div className='text-center p-12'>
            <h2 className='text-4xl font-bold'>Premium Digital Tools</h2>
            <p className=''>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
      </div>
    </div>
  <div className="tabs tabs-box justify-center bg-transparent">
  <input onClick={()=>setActiveTab("model")}   type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Model" defaultChecked />
  <input onClick={()=>setActiveTab("cart")}   type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label={`Cart (${carts.length})` } />

</div>
</div>

    {activTab ==="model" && <Model modelPromise={modelPromise} carts={carts} setCarts={setCarts}></Model>}
    {activTab ==="cart" && <Card carts={carts} setCarts={setCarts}></Card>}

    <Steps></Steps>
    <Pricing></Pricing>
    <Workflow></Workflow>
    <Footer></Footer>
   
    </>
  )
}

export default App
