import React from "react";

//import react router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//import pages
import Home from "./pages/Home.jsx";
import ProductDetails from "./pages/ProductDetails.jsx"

//import components
import Sidebar from "./components/Sidebar.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className='overflow-hidden'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
