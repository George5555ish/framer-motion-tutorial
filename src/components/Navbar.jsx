import React from "react";
import { motion } from "framer-motion";
import {CartContainer} from './CartComponent/CartContainer.jsx'
import BlobSvg from "./BlobSvg";
function Navbar() {
  const [currentLink, setCurrentLink] = React.useState(0);
  const [linkList, setLinkList] = React.useState([
    "Home",
    "About",
    "Collections",
    "Category",
  ]);
  const variants = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
    hidden: { opacity: 0 },
  };

  const navbarItems = {
    visible: {
      opacity: 1,
      y: [-100, 20, 0],
    },
    hidden: {
      opacity: 0,
      y: 0,
    },
  };

  const svgContainerVariants = {
    hover: {
      color: "#ff77cd",
    },
    visible: {
      opacity: 1,
      y: [-100, 20, 0],
      transition: {
        duration: 0.55,
        easing: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
      y: [-100, 20, 0],
    },
  };
  return (
    <motion.div
      className="navbar"
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      <motion.img
        src="/assets/img/logo.png"
        alt="logo"
        variants={navbarItems}
      />
      <motion.nav variants={navbarItems}>
        <ul>
          {linkList.map((link, id) => {
            return (
              <motion.li key={id} variants={svgContainerVariants} onMouseEnter={() => setCurrentLink(id)} onMouseLeave={() => setCurrentLink(0)}>
                <a href="/">{link}</a>
                {id === currentLink && (
                  <BlobSvg variants={svgContainerVariants} />
                )}
              </motion.li>
            );
          })}
        </ul>
 
      </motion.nav>
      <motion.img variants={navbarItems} src="/assets/img/shopping-cart.png" alt="cart" width="40px" height="40px" />
      {/* <CartContainer 
        variants={navbarItems}
      /> */}
    </motion.div>
  );
}

export default Navbar;
