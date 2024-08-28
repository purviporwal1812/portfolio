import { Link } from "react-router-dom";
import p1 from "../assets/ip.png";
import p2 from "../assets/pro2.png";
import p3 from "../assets/p3.png";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <>
          <div className="d-flex justify-content-center align-items-center">
        <div className="card">
          <img src={p3} className="card-img-top" alt="im" />
          <div className="card-body">
            <h5 className="card-title">FlashCard Tool</h5>
            <p className="card-text font-monospace">
            The Flashcard Tool is a web app for coding revision, built with React, Node.js, Express, and PostgreSQL. Users can view flashcards with coding questions and reveal answers by flipping the card. An internal dashboard allows users to add and manage questions stored in the PostgreSQL database.            </p>
            <p id="iconLink" className="d-flex justify-content-center">
              <Link
                target="_blank"
                to="https://github.com/purviporwal1812/flashfront"
              >
                <i className="fa-brands fa-2x fa-github me-5"></i>
              </Link>
              <Link target="_blank" to="https://flashfront-kappa.vercel.app/">
                <i className="ms-2 fa-solid fa-2x fa-link"></i>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="card">
          <img src={p3} className="card-img-top" alt="im" />
          <div className="card-body">
            <h5 className="card-title">Where In The World</h5>
            <p className="card-text font-monospace">
              This React-based web app uses a countries REST API to provide
              users with detailed information about countries worldwide. It
              features responsive design, search and filter functionalities, and
              detailed country profiles with interactive elements
            </p>
            <p id="iconLink" className="d-flex justify-content-center">
              <Link
                target="_blank"
                to="https://github.com/purviporwal1812/where-in-the-world"
              >
                <i className="fa-brands fa-2x fa-github me-5"></i>
              </Link>
              <Link target="_blank" to="https://wherein-the-world.netlify.app/">
                <i className="ms-2 fa-solid fa-2x fa-link"></i>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="card">
          <img src={p1} className="card-img-top" alt="im" />
          <div className="card-body">
            <h5 className="card-title">IP Address Tracker</h5>
            <p className="card-text font-monospace">
              Integrated technologies to provide real-time location information
              through responsive design and dynamic APIs. Used Leaflet a js
              library to show location on the map.
            </p>
            <p id="iconLink" className="d-flex justify-content-center">
              <Link
                target="_blank"
                to="https://github.com/purviporwal1812/IP-Address-"
              >
                <i className="fa-brands fa-2x fa-github me-5"></i>
              </Link>
              <Link target="_blank" to="https://ip-address-ten.vercel.app/">
                <i className="ms-2 fa-solid fa-2x fa-link"></i>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="card">
          <img src={p2} alt="im" />
          <div className="card-body">
            <h5 className="card-title">Assignment Tracker</h5>
            <p className="card-text font-monospace">
              Build an assignment tracking system implementing File Handling and
              Object Oriented Programming, Implemented Object Oriented Design.
            </p>
            <p id="iconLink" className="d-flex justify-content-center">
              <Link
                target="_blank"
                to="https://github.com/purviporwal1812/Oops-project1"
              >
                <i className="fa-brands fa-2x fa-github me-5"></i>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Projects;
