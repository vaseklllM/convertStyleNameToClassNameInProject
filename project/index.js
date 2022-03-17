import React from 'react';
import "./style.scss"
import "../../main.scss"

function Main({text}) {
  return (
    <div styleName={txt.join(['body ', " item", text === "lorem" && "loading"])}>Main</div>
  );
}

export default Main;