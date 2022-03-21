import React from 'react';
import classes from "./style.module.scss"
import Name from "./Name";
import join from "@/utils/join"


function Main({text, className}) {
  const isActive = typeof text === "string"

  return (
    <div className={join([className, isActive && classes.active, classes["body-wrapper"]])}  
       
         isActive={false}
         data={{}} >
        <Name className={join([className, classes.active, classes.name, classes.a1, classes.a2])}  data isActive={true} />
    </div>
  );
}

export default Main;