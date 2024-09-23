import AboutImg1 from "../assets/about1.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/About.css";
const About = () => {
  return (
    <>
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col-sm-6">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 10, mass: 8 }}
              className="img-fluid w-75 abtImg"
              src={AboutImg1}
              alt="About 1"
            />
          </div>
          <div className="col-sm-6 mt-5">
            <div className="words text-start lh-base font-monospace w-75">
            Hello! I’m Purvi Porwal, a third-year B.Tech Computer Science student at SGSITS, Indore. I have a strong passion for technology and problem-solving, with experience in developing dynamic web applications using technologies like Next.js, PostgreSQL, and Node.js. My expertise also includes programming languages such as Java and C++, as well as web development tools like HTML, CSS, and JavaScript. I enjoy exploring innovative solutions that enhance user experiences and look forward to furthering my career at the intersection of technology and creativity :)
              <br>
              </br>
              <Link to="/play"> Some other stuff </Link>
              <div id="say">
                <b>Say hello!</b>
                <br></br>
                <a href="mailto:purviporwal1812@gmail.com">
                  purviporwal1812@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-cols-sm-3 row-cols-1 mx-0 px-5" id="part2">
        <div className="col" id="edu">
          <h3>
            <strong>
              Shri G.S Institute of Technology and Science, Indore
            </strong>
          </h3>
          <p>Bachelor of Technology in Computer Science</p>
          <p>
            <em>Nov 2022 - July 2026</em>
          </p>
        </div>
        <div className="col" id="edu">
          <h3>
            <strong>Sita Devi Higher Secondary School</strong>
          </h3>
          <p>12th ,Madhya Pradesh Board of Secondary Education</p>
          <p>
            <em>July 2021 - July 2022</em>
          </p>
        </div>
        <div className="col" id="edu">
          <h3>
            <strong>
              Shri Cloth Market Vaishnav Bal Mandir Girls H S School
            </strong>
          </h3>
          <p>10th, Central Board of Secondary Education</p>
          <p>
            <em>July 2014 - Jun 2021</em>
          </p>
        </div>
      </div>
    </>
  );
};
export default About;
