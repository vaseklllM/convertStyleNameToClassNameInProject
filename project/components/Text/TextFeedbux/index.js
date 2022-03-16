import React from "react"
import PropTypes from "prop-types"
import "./style.scss"

const TextFeedbux = ({ children, className }) => {
  return (
    <span styleName="wrapper" className={className}>
      {Number(children).toFixed(1)}
    </span>
  )
}

TextFeedbux.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
}

export default TextFeedbux
