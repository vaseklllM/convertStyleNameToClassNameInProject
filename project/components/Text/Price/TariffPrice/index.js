import React from "react"
import PropTypes from "prop-types"
import { P14bold } from "../../Text"
import "./style.scss"

export default function TariffPrice({ children, className }) {
  if (children <= 0) return <P14bold className={className}>Бесплатно</P14bold>
  return (
    <P14bold styleName="price" className={className}>
      {children} / месяц
    </P14bold>
  )
}

TariffPrice.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
}
