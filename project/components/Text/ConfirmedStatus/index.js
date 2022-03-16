import React from "react"
import PropTypes from "prop-types"
import "./style.scss"
import { CheckCircleIcon, XCircleIcon } from "./icons"
import { P14 } from "../Text"
import { Link } from "react-router-dom"

const ConfirmedStatus = (props) => {
  const { confirmed, text, date, url } = props
  if (confirmed) {
    return (
      <div styleName='ConfirmedStatus'>
        <CheckCircleIcon />
        <P14>
          {text} {date}
        </P14>
      </div>
    )
  } else {
    return (
      <div styleName='NoConfirmedStatus'>
        <XCircleIcon />
        <div styleName='NoConfirmedStatus-text'>
          <P14>{text}</P14>
          <div styleName='NoConfirmedStatus-text-bottom'>
            <Link to={url} styleName='NoConfirmedStatus-text-bottom-link'>
              <P14>Подтвердить</P14>
            </Link>
            <P14>?</P14>
          </div>
        </div>
      </div>
    )
  }
}

ConfirmedStatus.propTypes = {
  confirmed: PropTypes.bool, // подтвержден или нет
  text: PropTypes.string,
  date: PropTypes.string, // дата подтверждения
  url: PropTypes.string, // ссылка для подтверждения
}

export default ConfirmedStatus
