import React from "react"
import PropTypes from "prop-types"
import { H3, Span14bold } from "../../Text"
import "./style.scss"

export default function FinalTariffPrice({ children, className }) {
  return (
    <div className={className} styleName="price">
      <Span14bold styleName="final_text">Итого:&nbsp;</Span14bold>
      <H3 styleName="final_price">{children}</H3>
    </div>
  )
}

FinalTariffPrice.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
}
