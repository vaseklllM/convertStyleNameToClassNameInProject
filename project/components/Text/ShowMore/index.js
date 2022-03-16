import React from "react"
import PropTypes from "prop-types"
import { Span14 } from "../Text"
import { ArrowIcon } from "./icons"
import "./style.scss"

const ShowMore = ({ show, handleShow, className }) => {
  return (
    <button styleName='ShowMore' className={className}  onClick={handleShow}>
      <Span14>Показать ещё</Span14>
      <ArrowIcon show={show} />
    </button>
  )
}

ShowMore.propTypes = {
  show: PropTypes.bool, //текущее состояние
  handleShow: PropTypes.func, // функция вызывается при нажатии
  className: PropTypes.string,
}

export default ShowMore
