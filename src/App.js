import React from "react";
import SurpriseCard from "./SurpriseCard";
import FloatingHearts from "./FloatingHearts";
import TypewriterText from "./TypewriterText";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1 className="mothers-day-text">Happy Mother's Day! 💖</h1>
      <TypewriterText />
      <FloatingHearts />
      <SurpriseCard />
    </div>
  );
}

export default App;