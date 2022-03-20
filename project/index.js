import React from 'react';
import "./style.scss"
import Name from "./Name";
import {txt} from '@/utils'


function Main({text}) {
  const isItem = false

  return (
    <div styleName='body'>
      <div
        styleName={txt.join([
          'body',
          isItem ? "a1" : 2 ? 'b1' : "b2"
        ])}
      >
        Main
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, veritatis?</p>
      </div>
      <Name styleName='name'/>
    </div>
  );
}

export default Main;