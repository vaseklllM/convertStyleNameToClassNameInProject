import React from 'react';
import classes from "./style.scss"
import Name from "./Name";
import join from "@/utils/join"


function Main({text}) {
  const isItem = false

  return (
    <div className={classes.body}>
      <div
        className={join([classes.body, isItem ? classes.a1 : 2 ? classes.b1 : classes.b2])}
      >
        Main
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, veritatis?</p>
      </div>
      <Name className={classes.name}/>
    </div>
  );
}

export default Main;