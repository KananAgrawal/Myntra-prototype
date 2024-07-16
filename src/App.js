
//import logo from './logo.svg';
//import img1 from './images/siteLogo.png';

import './App.css';
import Navbar from './components/Navbar';
import Mainbar from './components/Mainbar';
import Signup from './components/Signup';
import Inspiration from './components/Inspiration';
import Discovery from './components/Discovery';
import Leaderboard from './components/Leaderboard';
import React, { useState } from "react";

import { BrowserRouter,Route, Routes } from "react-router-dom";
import Login from './components/Login';


function App() {
  return (
    <>
    
     <BrowserRouter>
     <div className="container">
      <Navbar/>
      
      
        <Routes>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
       
        <Route exact path="/" element=
        {<Mainbar/>}></Route>
         <Route exact path="/inspiration" element={<Inspiration/>}></Route>
         <Route exact path="/discovery" element={<Discovery/>}></Route>
         <Route exact path="/leaderboard" element={<Leaderboard/>}></Route>
        </Routes> 
      </div>
      </BrowserRouter>
    
    </>
);
}

export default App;