import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import ".../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Contact from "./Contact";
import Service from "./Service";
import About from "./About";
import Navbar from "./Navbar";
import Footer from "./Footer";


import { Routes, Route, Navigate } from 'react-router-dom';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='service' element={<Service />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />

    </>

  );
}

export default App;
