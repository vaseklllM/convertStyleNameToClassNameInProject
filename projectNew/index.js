import React from 'react';
import classes from "./style.module.scss"
import Name from "./Name";
import join from "@/utils/join"


function Main({text}) {
  const isItem = false

  return (
    <div className={join([classes.body_wrapper, classes.test1])}>
      <div
        className={join([classes.body, isItem ? classes.item : Array.isArray([]) ? classes.name_1 : classes.name_2, text === 'lorem' && classes["loading-test"]])}
      >
        Main
        <p style={{}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, veritatis?</p>
      </div>
      <Name className={classes.name}/>
    </div>
  );
}

export default Main;