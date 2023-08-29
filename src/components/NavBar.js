import React, {useState} from "react"
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from "react-router-dom";


export default function NavBar() {
    const [isShown, setIsShown] = useState(false)
    const [isLinkClicked, setIsLinkClicked] = useState(false)
    const handleClick = () => {
      setIsShown(prevIsShown => !prevIsShown)
    }
    const handleLinkClick = () => {
      setIsLinkClicked(true)
      setIsShown(prevIsShown => !prevIsShown)
      setTimeout(() => {
        setIsLinkClicked(false)
      },300)
    }
    return (
      <>
      <ul className="nav-bar-items">
        <li className="logo"><Link to="/">DZ</Link></li>
        <li className="nav-bar-item"><Link to="/">Home</Link></li>
        <li className="nav-bar-item"><a href="#about-me">About me</a></li>
        <li className="nav-bar-item"><Link to="/projects">Projects</Link></li>
        <li onClick={handleClick} className="nav-bar-item hamburger">{!isShown ? <RxHamburgerMenu /> : <AiOutlineClose />}</li>
      </ul>
      <ul className={isShown && !isLinkClicked ? "drop-down-menu active" : "drop-down-menu"}>
        <li onClick={handleLinkClick} className="menu-item"><Link to="/">Home</Link></li>
        <li onClick={handleLinkClick} className="menu-item"><Link to="/about">About me</Link></li>
        <li onClick={handleLinkClick} className="menu-item"><Link to="/projects">Projects</Link></li>
      </ul>
      </>
    )
}