import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, {useState, useEffect} from "react"
import NavBar from './components/NavBar/NavBar';
import Home from "./components/Home/Home"
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element="about-me" />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
