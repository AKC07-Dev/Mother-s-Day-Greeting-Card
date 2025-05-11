import React from "react";
import { motion } from "framer-motion";
import "./FloatingHearts.css";

const FloatingHearts = () => {
  const heartsArray = [...Array(15)]; // Adjust number of hearts

  return (
    <div className="heart-container">
      {heartsArray.map((_, i) => (
        <motion.div
          key={i}
          className="heart"
          initial={{
            opacity: 0,
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            opacity: 1,
            y: -100,
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;