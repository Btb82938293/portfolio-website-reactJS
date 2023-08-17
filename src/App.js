import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, {useState, useEffect} from "react"
import NavBar2 from './components/NavBar';
import Home from "./components/Home"
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <NavBar2 />
     <Home />
     <Footer/>
    </div>
  );
}

export default App;
