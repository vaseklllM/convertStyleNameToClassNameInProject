import React from 'react';
import classes from "./style.module.scss"
import Name from "./Name";
import {txt} from '@/utils'
import join from "@/utils/join"


function Main({text, className}) {
  const isActive = typeof text === "string"

  return (
    <div styleName={txt.join(['body', isActive ? 'active': 'no-active'])} className={className}>

    </div>
  );
}

export default Main;