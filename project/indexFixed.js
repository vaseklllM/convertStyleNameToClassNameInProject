import React from 'react';
import classes from "./style.module.scss"
import "../main.scss"

function Main({text}) {
  return (
    <div className={join([classes.body, classes.item, text === "lorem-2" && classes["loading-2"]])}>Main</div>
  );
}

export default Main;