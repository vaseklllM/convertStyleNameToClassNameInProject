import React from 'react';
import classes from "./style.module.scss"
import Name from "./Name";
import {txt, obj} from '@/utils'
import join from "@/utils/join"


function Main({text}) {
  return (
    <div className={join([classes.body_wrapper, classes.test1])}>
      <div
        className={join([classes.body, classes.item, text === 'lorem' && classes["loading-test"]])}
      >
        Main
        <p style={{}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, veritatis?</p>
      </div>
      <Name className={classes.name}/>
    </div>
  );
}

export default Main;