import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, {useState, useEffect} from "react"
import NavBar from './components/NavBar/NavBar';
import Home from "./components/Home/Home"
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import Preloader from "./components/Pre/Pre";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {

const [load, setLoad] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoad(false)
    }, 1300)
  }, [])

  return (
    <Router>
      <Preloader load={load} />
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
