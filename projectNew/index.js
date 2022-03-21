import React from 'react';
import classes from "./style.module.scss"
import Name from "./Name";
import join from "@/utils/join"


function Main({text, className}) {
  const isActive = typeof text === "string"

  return (
    <div className={join([className, isActive && classes.name, classes.body, isActive ? classes.active : classes["no-active"]])}  
       
         isActive={false}
         aria-required={'asf'}>

    </div>
  );
}

export default Main;