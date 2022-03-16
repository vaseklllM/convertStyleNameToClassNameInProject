import React from "react"
import PropTypes from "prop-types"
import "./style.scss"

const TextMessagePcs = ({ children }) => {
  if (!children) return null
  return <span styleName='TextMessagePcs'>{children}</span>
}

TextMessagePcs.propTypes = {
  children: PropTypes.node
}

export default TextMessagePcs
