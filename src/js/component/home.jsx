import React, { useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


const Home = () => {
  const [color, setColor] = useState();
  const nextColor = () => {
    setColor((prevColor) => (prevColor + 1) % 3);
  };

  return (
    <div className="trafficTop">
      <div className="Palito"></div>
      <div className="traffic-signal">
        <div
          className={"light red " + (color == 0 ? "glow" : "")}
          onClick={() => setColor(0)}
        ></div>
        <div
          className={`light yellow ${color == 1 ? "glow" : ""}`}
          onClick={() => setColor(1)}
        ></div>
        <div
          className={`light green ${color == 2 ? "glow" : ""}`}
          onClick={() => setColor(2)}
        ></div>
        </div>
      <div className="Press">
        <button  className="boton" onClick={nextColor}>Next</button>

                
      </div>
    </div>
    
  );
};

export default Home;
