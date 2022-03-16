import React from "react"
import PropTypes from "prop-types"
import { Span14bold } from "../../Text"

export default function TariffPrice({ children, className }) {
  return <Span14bold className={className}>{children}</Span14bold>
}

TariffPrice.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
}
