import React from 'react';
import "./style.scss"
import "../main.scss"

function Main({text}) {
  const isActive = true

  return (
    <div styleName='body_wrapper' >
      <div styleName={txt.join(['body', "item", text === "lorem" && isActive && "loading"])}>
        Main
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, veritatis?</p>
      </div>
    </div>
  );
}

export default Main;