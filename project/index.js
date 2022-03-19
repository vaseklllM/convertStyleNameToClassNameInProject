import React from 'react';
import "./style.scss"
import Name from "./Name";
import {txt} from '@/utils'


function Main({text}) {
  const isItem = false

  return (
    <div styleName='body_wrapper test1'>
      <div
        styleName={txt.join([
          isItem ? "item" : Array.isArray([]) && 'name_1',
        ])}
      >
        Main
        <p style={{}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, veritatis?</p>
      </div>
      <Name styleName='name'/>
    </div>
  );
}

export default Main;