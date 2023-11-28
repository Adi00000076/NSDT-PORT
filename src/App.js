import React from 'react';
import "./App.css"

import Dashboard1 from './Componennts/NSDT/Dashboard/Dashboard1';
import Yardheaders from './Componennts/YARD/Yardheaders';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NsdtBody from './Componennts/MAIN/Nsdt-Body';
import Footer from './Componennts/Footer/Footer';

const App = () => {
  return (
    <>
      <BrowserRouter>

      <Dashboard1 />
        <Routes>
        <Route path="/" element={<NsdtBody />} />
          <Route path="/container_planning" element={<Yardheaders />} />
        



        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
