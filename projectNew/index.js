import React from 'react';
// import Name from "./Name";
import classes from "./style.module.scss"
import join from "@/utils/join"


function Main({text, className}) {
  const isActive = typeof text === "string"

  return (
    <div className={join([className, classes.arrow, isActive ? classes.active : classes["no-active"]])}  
         direction={showAnswer ? "up" : "down"}
          color="blue"
          
          type={fn(["dropDown"])}
    >
    </div>
  );
}

export default Main;