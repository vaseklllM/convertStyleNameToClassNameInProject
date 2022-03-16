import React from "react"
import PropTypes from "prop-types"
import "./style.scss"
import { P16 } from "../Text"

// Маркированый список
const BulletedList = ({ list }) => {
  return (
    <ul styleName='BulletedList'>
      {list.map((el, i) => {
        return (
          <li key={i} styleName='BulletedList-li'>
            <P16>{el}</P16>
          </li>
        )
      })}
    </ul>
  )
}

BulletedList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string)
}

export default BulletedList
