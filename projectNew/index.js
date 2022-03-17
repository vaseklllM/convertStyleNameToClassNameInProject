import React from 'react';
import classes from "./style.module.scss"
import "../main.scss"

function Main({text}) {
  const isActive = true

  return (
    <div className={classes.body_wrapper} >
      <div className={join([classes.body, classes.item, text === "lorem" && isActive && classes.loading])}>
        Main
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, veritatis?</p>
      </div>
    </div>
  );
}

export default Main;