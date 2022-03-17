import React from 'react';
import "./style.scss"
import Name from "./Name";

function Main({text}) {
  return (
    <div styleName='body_wrapper test1'>
      <div
        styleName={txt.join([
          'body',
          "item",
          text === 'lorem' && "loading-test",
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