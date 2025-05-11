import React, { useState, useEffect } from "react";
import "./TypewriterText.css";

const text = "Moothers are like glue. Even when you can’t see them, they’re still holding everything together ❤️";

const TypewriterText = () => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prevText) => prevText + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust speed (milliseconds)
    
    return () => clearInterval(interval);
  }, []);

  return <h2 className="typewriter-text">{displayText}</h2>;
};

export default TypewriterText;