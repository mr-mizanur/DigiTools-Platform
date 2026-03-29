import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'
import Navbar from './component/Navbar'
import Banner from './component/Banner';
import BannerFoot from './component/BannerFoot';
import Model from './component/Model';


const getModel = async()=>{
  const res = await fetch("/model.json")
  return res.json()
}
const modelPromise =getModel()

function App() {
 

  return (
    <>
    
    <Navbar></Navbar>
    <Banner></Banner>
    <BannerFoot></BannerFoot>
    <Model modelPromise={modelPromise}></Model>
   
    </>
  )
}

export default App
