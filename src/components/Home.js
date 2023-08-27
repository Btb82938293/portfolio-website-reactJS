import Type from './Type';

export default function Home() {
  return (
    <div className="container">
    <main>
        <h1><span className="main-text">Hello!</span><br></br>I'm <span className="name colored">Dmitry Zasypkin</span> <span className="icon wave">👋</span> <br></br><span className="type-el"><Type /></span></h1>
    </main>
    <section className="home-section">
      <h1>LET ME <span className="colored">INTRODUCE </span> MYSELF</h1>
      <p>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️<br></br>

I am fluent in Javascript.
<br></br>
My field of Interests are building new  Web Technologies and Products.
<br></br>
Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and Frameworks  like React.js and Next.js.</p>
    </section>
    </div>
  );
}