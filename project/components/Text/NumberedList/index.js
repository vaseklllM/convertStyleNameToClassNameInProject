import React from "react"
import PropTypes from "prop-types"
import "./style.scss"
import { P16, Span16 } from "../Text"

const NumberedList = ({ list }) => {
  return (
    <ul styleName='NumberedList'>
      {list.map((el, i) => {
        return (
          <li key={i} styleName='NumberedList-li'>
            <Span16 styleName='NumberedList-li-num'>{++i}.</Span16>
            <P16>{el}</P16>
          </li>
        )
      })}
    </ul>
  )
}

NumberedList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string)
}

export default NumberedList
