
import './App.css';
import React, { useState } from 'react';
// import Header from './components/header/Header';
// import Footer from './components/footer/Footer';
// import Carousel from './components/carousel/Carousel';
// import Card from './components/card/Card';
// import Advert from './components/advertisement/Advert';
import Form from './components/form/Form';
// import { useState } from 'react';
// import AddDetails from './components/addDetails/AddDetails';
import {Routes, Route} from "react-router-dom";
// import Home from './pages/Home';
import AddDetails from './components/addDetails/AddDetails';
import Signin from './auth/Signin';
import Card from './components/card/Card';



import Home from "./pages/Home";




function App() {
  // const [indexx,setindexx]=useState()

//   function Getind(ind){
// setindexx(ind)
//   }
const sendIndexxx =(productid)=> {
   console.log("productId=>", productid)
}

  return (
    <>
    <Routes>
      
      <Route exact path='/' element={<Home sendIndexx={sendIndexxx}/>} />
      <Route path='/form' element={<Form />} />
      <Route path='/add-details' element={<AddDetails />} />
      <Route path='/signin' element={<Signin />} />
    
    </Routes>
   
      

      

    
    </>
  );
}

export default App;
