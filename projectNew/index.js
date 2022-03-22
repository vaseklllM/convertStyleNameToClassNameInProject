import React from 'react';
// import { txt } from "../../../utils"
// import Name from "./Name";
import classes from "./style.module.scss"


function Main({text, className}) {
  const isActive = typeof text === "string"

  return (
    <div  className={classes.arrow} direction={showAnswer ? "up" : "down"}
          color="blue"
          type="dropDown"
    >
    </div>
  );
}

export default Main;