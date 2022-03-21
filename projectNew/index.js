import React from 'react';
import classes from "./style.module.scss"
import Name from "./Name";
import {txt} from '@/utils'
import join from "@/utils/join"


function Main({text, className}) {
  const isItem = false

  return (
    <div styleName={txt.join(['body', className])} className={className}>

    </div>
  );
}

export default Main;