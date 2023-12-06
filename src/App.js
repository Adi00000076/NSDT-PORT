import React from 'react';
import "./App.css"

import Dashboard1 from './Componennts/NSDT/Dashboard/Dashboard1';
import Yardheaders from './Componennts/YARD/Yardheaders';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NsdtBody from './Componennts/MAIN/Nsdt-Body';
import Footer from './Componennts/Footer/Footer';
import Home from './Componennts/Pages/Home/Home';
import Planyard from './Componennts/Pages/PlanYard/Planyard';





const App = () => {
  return (
    <>
      <BrowserRouter>

      <Dashboard1 />
        <Routes>


        <Route path="/home" element={<Home />} />
        <Route path="/" element={<NsdtBody />} />
          <Route path="/container_planning" element={<Yardheaders />} />
          <Route path="/Planyard" element={<Planyard />} />
         
        



        </Routes>
     
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
