import React from 'react';
import classes from "./styleFixed.module.scss"
import "../main.scss"

function Main({text}) {
  return (
    <div className={join([classes.body, classes.item, text === "lorem" && classes.loading])}>Main</div>
  );
}

export default Main;