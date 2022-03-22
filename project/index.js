import React from 'react';
import { txt } from "../../../utils"
import classes from "./style.scss"
import Name from "./Name";


function Main({text, className}) {
  const isActive = typeof text === "string"

  return (
    <div styleName={txt.join(['body-wrapper'])}
         className={txt.join([className, isActive && classes.active])}
         isActive={false}
         data={{}} >
        <Name styleName='name'  className={txt.join([className, classes.active])} data isActive={true} />
    </div>
  );
}

export default Main;