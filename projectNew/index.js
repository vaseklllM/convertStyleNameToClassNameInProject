import React from 'react';
import Name from "./Name";
import classes from "./style.module.scss"
import join from "@/utils/join"


function Main({text, className}) {
  const isActive = typeof text === "string"

  return (
    <div className={join([className, isActive && classes.active, classes["body-wrapper"]])}  
       
         isActive={false}
         data={{}} >
        <Name className={join([className, classes.active, classes.name])}   data isActive={true} />
    </div>
  );
}

export default Main;