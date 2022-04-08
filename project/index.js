import React from "react"
import "./style.scss"
import { american_express, mastercard, mir, visa } from "@/public/icons"
import { SVG } from "@/components/SVG"
import { txt } from "@/utils"
import { enumBankCardCompanies } from "./enums"
import { stateAddBankCard } from "@/store/addBankCard"
import { useSelector } from "react-redux"

export const OptionItem = ({
  title,
  icon,
  isLoading,
  link,
  disable,
  onClick = (f) => f,
}) => {
  function handleClick() {
    if (!disable) onClick()
  }

  const OptionBody = (
    <>
      {isLoading && (
        <div styleName="loader-wrapper">
          <LoadingIcon
            indicatorColor="rgb(66, 135, 245)"
            trackColor="rgb(66, 135, 245, 0.2)"
          />
        </div>
      )}
      {icon && <div styleName="icon">{icon}</div>}
      <Span16 styleName="title">{title}</Span16>
    </>
  )

  if (link && !disable)
    return (
      <Link
        styleName={txt.join(["wrapper", disable && "disable"])}
        to={link}
        onClick={handleClick}
      >
        {OptionBody}
      </Link>
    )

  return (
    <li
      styleName={txt.join(["wrapper", disable && "disable"])}
      onClick={handleClick}
    >
      {OptionBody}
    </li>
  )
}

OptionItem.propTypes = {
  title: PropTypes.string,
  isLoading: PropTypes.bool,
  icon: PropTypes.node,
  link: PropTypes.string,
  disable: PropTypes.bool,
  onClick: PropTypes.func,
}
