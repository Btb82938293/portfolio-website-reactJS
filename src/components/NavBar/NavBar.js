import React, {useState} from "react"
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from "react-router-dom";
import './NavBar.css';


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
        <li className="nav-bar-items__logo"><Link to="/">DZ</Link></li>
        <li className="nav-bar-items__item"><Link to="/">Home</Link></li>
        <li className="nav-bar-items__item"><a href="/#home__section">About me</a></li>
        <li className="nav-bar-items__item"><Link to="/projects">Projects</Link></li>
        <li onClick={handleClick} className="nav-bar-items__hamburger">{!isShown ? <RxHamburgerMenu /> : <AiOutlineClose />}</li>
      </ul>
      <ul className={isShown && !isLinkClicked ? "nav-bar-items__menu nav-bar-items_active" : "nav-bar-items__menu"}>
        <li onClick={handleLinkClick} className="nav-bar-items__menu-item"><Link to="/">Home</Link></li>
        <li onClick={handleLinkClick} className="nav-bar-items__menu-item"><a href="/#home__section">About me</a></li>
        <li onClick={handleLinkClick} className="nav-bar-items__menu-item"><Link to="/projects">Projects</Link></li>
      </ul>
      </>
    )
}