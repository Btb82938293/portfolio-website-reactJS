import img from "../../Assets/project-img.jpg"
import "./Projects.css"

export default function Projects() {
    return (
        <div className="projects">
            <h1>My recent works</h1>
            <p className="projects__text-colored">Here are some projects I have worked on recently</p>
            <div className="projects__container">
                <div className="projects__project">
                    <img className="projects__img" src={img}></img>
                    <p className="projects__name">Tenzies</p>
                    <p className="projects__description">Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat. </p>
                </div>
                <div className="projects__project">
                    <img className="projects__img" src={img}></img>
                    <p className="projects__name">Tenzies</p>
                    <p className="projects__description">Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat. </p>
                </div>
                <div className="projects__project">
                    <img className="projects__img" src={img}></img>
                    <p className="projects__name">Tenzies</p>
                    <p className="projects__description">Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat. </p>
                </div>
                <div className="projects__project">
                    <img className="projects__img" src={img}></img>
                    <p className="projects__name">Tenzies</p>
                    <p className="projects__description">Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat. </p>
                </div>
                <div className="projects__project">
                    <img className="projects__img" src={img}></img>
                    <p className="projects__name">Tenzies</p>
                    <p className="projects__description">Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat. </p>
                </div>
                <div className="projects__project">
                    <img className="projects__img" src={img}></img>
                    <p className="projects__name">Tenzies</p>
                    <p className="projects__description">Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat. </p>
                </div>
            </div>
        </div>
    )
}