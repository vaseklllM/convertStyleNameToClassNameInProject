import React from "react"
import PropTypes from "prop-types"
import "./style.scss"
import { CarIcon } from "../../Icons"

const TextDistache = ({ size }) => {
  if (size === 18) {
    return (
      <div styleName="TextDistache18">
        <div styleName="TextDistache18-icon">
          <CarIcon />
        </div>
        <div styleName="TextDistache18-distance">2 122,2 km</div>
      </div>
    )
  }

  return <div styleName="TextDistache"></div>
}

TextDistache.propTypes = {
  size: PropTypes.number,
}

TextDistache.propTypes = {
  size: PropTypes.number
}

export default TextDistache
