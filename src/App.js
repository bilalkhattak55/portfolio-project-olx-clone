
// import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Carousel from './components/carousel/Carousel';
import Card from './components/card/Card';
import Advert from './components/advertisement/Advert';
import Form from './components/form/Form';
import { useState } from 'react';
import AddDetails from './components/addDetails/AddDetails';
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';

function App() {
const [show,setshow]=useState(false)

function handleClicked (){
setshow(true)
}

  return (
    <>
    <Routes>
      <Route exact path='/' element={<Home/>} />
    </Routes>
    {show ? <Form /> : <> <Header handleClicked={handleClicked}  />
    <Carousel />
    <Card />
    <Advert />
      <Footer /></> }

      
      <AddDetails />

    
    </>
  );
}

export default App;
