import React from 'react';
// import { txt } from "../../../utils"
// import Name from "./Name";
import "./style.scss"


function Main({text, className}) {
  const isActive = typeof text === "string"

  return (
    <div  styleName="arrow"
          direction={showAnswer ? "up" : "down"}
          color="blue"
          type="dropDown"
    >
    </div>
  );
}

export default Main;