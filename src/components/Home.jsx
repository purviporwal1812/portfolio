import { motion, inView } from "framer-motion";
import "../styles/Home.css";

import me from "../assets/me.png";
import Projects from "./Projects";
import { useEffect, useState } from "react";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5 text-start">
          <h1 className="intro-text">Hi There! I am Purvi</h1>
          <hr className="underline" />
          <p className="font-monospace">
            Exploring the intersection of technology, innovation, and design.
            Let's connect and create opportunities together! 🚀
          </p>
        </div>
        <div className="col-md-3 text-end">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 10, mass: 8 }}
            src={me}
            alt="Your Image"
            className="img-fluid"
          />
        </div>
      </div>
      <Projects />
    </div>
  );
};

export default Home;
