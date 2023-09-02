import Type from '../Type/Type';
import { BsInstagram } from 'react-icons/bs';
import { SlSocialVkontakte } from 'react-icons/sl';
import { BsTelegram } from 'react-icons/bs';
import './Home.css';
import compImg from "../../Assets/compImg.jpg"
import meImg from "../../Assets/meImg.PNG"


export default function Home() {
  return (
    <div className="home__container">
    <main>
        <h1><span className="home__main-text">Hello!</span>
        <br></br>I'm <span className="home__text-colored">Dmitry Zasypkin </span>
        <span className="home__hand-icon wave">👋</span> <br></br><span className="type-el"><Type />
        </span></h1>
        <img className="home__comp-img" src={compImg}></img>
    </main>
    <section id="home__section" className="home__section">
      <h1>LET ME <span className="home__text-colored">INTRODUCE </span> MYSELF</h1>
      <div className="home__about-me">
      <div className="home__description">
      <p>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</p>
      <p>I am fluent in <span className="home__text-colored">Javascript</span>.</p>
      <p>My field of Interests are building new  <span className="home__text-colored">Web Technologies and Products</span>.</p>
      <p>Whenever possible, I also apply my passion for developing products with <span className="home__text-colored">Node.js</span> 
        and <span className="home__text-colored">Modern Javascript Library and Frameworks</span>  like <span className="home__text-colored">React.js and Next.js</span>.</p>
      </div>
      <img className="home__me-img" src={meImg}></img>
      </div>
      <div className="home__contacts">
        <h1>FIND ME ON</h1>
        <p className="home__text-colored">Feel free to connect with me</p>
        <ul className="home__icons">
          <li className="home__icon"><BsInstagram/></li>
          <li className="home__icon"><SlSocialVkontakte/></li>
          <li className="home__icon"><BsTelegram/></li>
        </ul>
      </div>
    </section>
    </div>
  );
}