import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, {useState, useEffect} from "react"
import NavBar2 from './components/NavBar';
import Home from "./components/Home"
import Footer from './components/Footer';
import Projects from './components/Projects/Projects';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //  <NavBar2 />
    //  <Home />
    //  <Footer/>
    // </div>
    <Router>
      <div className="App">
        <NavBar2 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
