import "./App.css";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import { ModalComponent } from "./components/ModalComponent/ModalComponent.jsx";
function App() {
  const [isVisible, setIsVisible] = React.useState(false);
  return (
    <>
      <ModalComponent isVisible={isVisible} setIsVisible={setIsVisible} />
      <div className={isVisible ? "modal-open container" : "container"}>
        <Navbar />
        <div className="container_body">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="content"
          >
            <motion.a
              whileHover={{
                scale: 1.2,
                boxShadow: "5px 4px 8px 2px #87adfe",
                color: "#000",
                transition: {
                  type: "tween",
                },
              }}
              className="btn"
              onClick={() => setIsVisible(true)}
            >
              Outfit Of The Week
            </motion.a>
            <h1>
              You should always
              <br /> feel pretty
            </h1>

            <p>Clothes that are sure to heat up</p>
            {/* <div className="arrow-icons">
          <img src="/assets/img/back-arrow.png" alt="back" />
          <img src="/assets/img/next-arrow.png" alt="next" />
        </div> */}
          </motion.div>

          <motion.img
            src="/assets/img/img.png"
            alt="next"
            className="feature-img"
            initial={{ opacity: [0,0.5,1], x: "-100vw" }}
            transition={{ type: "string", stiffness: 600, delay: 0.35 }}
            animate={{ opacity: [0, 0.5, 1], x: [-1500, 35, 0] }}
          />
        </div>
        <div className="social-links">
          <a href="#">FACEBOOK</a>
          <a href="#">INSTAGRAM</a>
          <a href="#">TWITTER</a>
        </div>
      </div>
    </>
  );
}

export default App;
