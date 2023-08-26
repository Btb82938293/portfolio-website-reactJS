import Type from './Type';

export default function Home() {
  return (
    <div className="container">
    <main>
        <h1><span className="main-text">Hello!</span><br></br>I'm <span className="name colored">Dmitry Zasypkin</span> <span className="icon wave">👋</span> <br></br><span className="type-el"><Type /></span></h1>
    </main>
    </div>
  );
}