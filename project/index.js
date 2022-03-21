import React from 'react';
import "./style.scss"
import Name from "./Name";
import {txt} from '@/utils'


function Main({text, className}) {
  const isItem = false

  return (
    <div styleName={txt.join(['body', className])} className={className}>

    </div>
  );
}

export default Main;