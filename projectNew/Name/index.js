import React from 'react';
import classes from "./style.module.scss"
import join from "@/utils/join"

function Name({ className }) {
  return (
    <div className={join([className, classes.company])}  >Name</div>
  );
}

export default Name;