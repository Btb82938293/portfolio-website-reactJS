import React, {useState} from "react"
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';


export default function NavBar() {
    const [isShown, setIsShown] = useState(false)
    const handleClick = () => {
      setIsShown(prevIsShown => !prevIsShown)
    }
    return (
      <>
      <ul className="nav-bar-items">
        <li className="nav-bar-item logo"><a href="#">My Website</a></li>
        <li className="nav-bar-item"><a href="#">About me</a></li>
        <li className="nav-bar-item"><a href="#">Projects</a></li>
        <li onClick={handleClick} className="nav-bar-item hamburger">{!isShown ? <RxHamburgerMenu /> : <AiOutlineClose />}</li>
      </ul>
      <ul className={!isShown ? "drop-down-menu" : "drop-down-menu active"}>
        <li className="drop-down-item"><a href="#">My Website</a></li>
        <li className="drop-down-item"><a href="#">About me</a></li>
        <li className="drop-down-item"><a href="#">Projects</a></li>
      </ul>
      </>
    )
}