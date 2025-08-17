import React, {useState, useEffect} from "react";
import "../../styles/index.css";


const TrafficLight = () => {
    const [color, setColor] = useState("red");
    
    return(
    <div className="lightFrame">
      <div
        className={`redLight ${color === "red" ? "glow" : ""}`}
        onClick={() => setColor("red")}
      ></div>
      <div
        className={`yellowLight ${color === "yellow" ? "glow" : ""}`}
        onClick={() => setColor("yellow")}
      ></div>
      <div
        className={`greenLight ${color === "green" ? "glow" : ""}`}
        onClick={() => setColor("green")}
      ></div>
    </div>
  );
};
   
export default TrafficLight;
