import React, {useState} from "react"
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from "react-router-dom";


export default function NavBar() {
    const [isShown, setIsShown] = useState(false)
    const handleClick = () => {
      setIsShown(prevIsShown => !prevIsShown)
    }
    console.log(window.innerWidth)
    return (
      <>
      <ul className="nav-bar-items">
        <li className="logo"><Link to="/">My Website</Link></li>
        <li className="nav-bar-item"><Link to="/">Home</Link></li>
        <li className="nav-bar-item"><Link to="/about">About me</Link></li>
        <li className="nav-bar-item"><Link to="/projects">Projects</Link></li>
        <li onClick={handleClick} className="nav-bar-item hamburger">{!isShown ? <RxHamburgerMenu /> : <AiOutlineClose />}</li>
      </ul>
      <ul className={!isShown ? "drop-down-menu" : "drop-down-menu active"}>
        <li className="menu-item"><Link to="/">Home</Link></li>
        <li className="menu-item"><Link to="/about">About me</Link></li>
        <li className="menu-item"><Link to="/projects">Projects</Link></li>
      </ul>
      </>
    )
}