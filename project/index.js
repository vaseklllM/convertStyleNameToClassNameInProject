import React from 'react';
// import { txt } from "../../../utils"
// import Name from "./Name";
import "./style.scss"


function Main({text, className}) {
  const isActive = typeof text === "string"

  return (
    <div  styleName={txt.join(['arrow', isActive  ? 'active': 'no-active'])}
          direction={showAnswer ? "up" : "down"}
          color="blue"
          className={className}
          type={fn(["dropDown"])}
    >
    </div>
  );
}

export default Main;