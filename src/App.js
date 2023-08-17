import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, {useState, useEffect} from "react"
import NavBar from './components/NavBar';
import Home from "./components/Home"

function App() {
  return (
    <div className="App">
     <NavBar />
     <Home />
    </div>
  );
}

export default App;
