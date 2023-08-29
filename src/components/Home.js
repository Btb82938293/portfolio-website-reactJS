import Type from './Type';
import meImg from "../Assets/meImg.PNG"
import { BsInstagram } from 'react-icons/bs';
import { SlSocialVkontakte } from 'react-icons/sl';
import { BsTelegram } from 'react-icons/bs';
import compImg from "../Assets/compImg.jpg"


export default function Home() {
  return (
    <div className="container">
    <main>
        <h1><span className="main-text">Hello!</span>
        <br></br>I'm <span className="name colored">Dmitry Zasypkin </span>
        <span className="icon wave">👋</span> <br></br><span className="type-el"><Type />
        </span></h1>
        <img className="main-comp-img" src={compImg}></img>
    </main>
    <section id="about-me" className="home-section">
      <h1>LET ME <span className="colored">INTRODUCE </span> MYSELF</h1>
      <div className="home-section-about-me">
      <div className="home-section-description">
      <p>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</p>
      <p>I am fluent in <span className="colored">Javascript</span>.</p>
      <p>My field of Interests are building new  <span className="colored">Web Technologies and Products</span>.</p>
      <p>Whenever possible, I also apply my passion for developing products with <span className="colored">Node.js</span> 
        and <span className="colored">Modern Javascript Library and Frameworks</span>  like <span className="colored">React.js and Next.js</span>.</p>
      </div>
      <img className="me-img" src={meImg}></img>
      </div>
      <div className="home-section-contacts">
        <h1>FIND ME ON</h1>
        <p className="colored">Feel free to connect with me</p>
        <ul className="home-section-icons">
          <li className="home-section-icon"><BsInstagram/></li>
          <li className="home-section-icon"><SlSocialVkontakte/></li>
          <li className="home-section-icon"><BsTelegram/></li>
        </ul>
      </div>
    </section>
    </div>
  );
}