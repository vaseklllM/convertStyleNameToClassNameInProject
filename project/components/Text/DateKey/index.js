import React from "react"
import "./style.scss"
import { CalendarIcon } from "./icons"
import { P14, Span16 } from "../Text"
import { format } from "date-fns"
import ruLocale from "date-fns/locale/ru"
import PropTypes from "prop-types"

function DateKey(props) {
  const { className, date } = props

  if (!date) return null

  const dateText = format(new Date(date), "dd MMM yyyy", { locale: ruLocale })

  return (
    <div styleName="DateKey" className={className}>
      <CalendarIcon />
      <P14 styleName="text">
        Ключ годен до: <Span16>{dateText}</Span16>
      </P14>
    </div>
  )
}

DateKey.propTypes = {
  date: PropTypes.instanceOf(Date),
  className: PropTypes.string,
}

export default DateKey
