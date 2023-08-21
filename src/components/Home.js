import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaRegHandPeace } from 'react-icons/fa';
import Type from './Type';

// HiOutlineHandRaised

export default function Home() {
  return (
    <div className="container">
    <main>
        <h1><span className="main-text">Hello!</span><br></br>I'm Dmitry Zasypkin<span className="icon"> 👋</span> <br></br><span className="type-el"><Type /></span></h1>
    </main>
    </div>
  );
}