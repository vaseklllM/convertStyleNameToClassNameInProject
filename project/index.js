import React from 'react';
import Name from './Name'
import "./style.scss"
import {txt} from '@/utils'

function Main({ className }) {
  return (
    <div styleName='body'>Main
      <div styleName="body-2 item">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, quidem.
      </div>
      <Name styleName='name' />
    </div>
  );
}

export default Main;