import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaRegHandPeace } from 'react-icons/fa';
import Type from './Type';

// HiOutlineHandRaised

export default function Home() {
  return (
    <main>
        <h1>Hi! <br></br>I'm Dmitry Zasypkin<span className="icon">👋</span></h1>
        <div style={{ textAlign: "left" }} className="type-el"><Type /></div>
    </main>
  );
}