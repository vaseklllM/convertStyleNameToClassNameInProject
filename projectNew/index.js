import React from "react"
import classes from "./style.module.scss"
import { american_express, mastercard, mir, visa } from "@/public/icons"
import { SVG } from "@/components/SVG"
import { enumBankCardCompanies } from "./enums"
import { stateAddBankCard } from "@/store/addBankCard"
import { useSelector } from "react-redux"
import join from "@/utils/join"

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
        <div className={classes["loader-wrapper"]}>
          <LoadingIcon
            indicatorColor="rgb(66, 135, 245)"
            trackColor="rgb(66, 135, 245, 0.2)"
          />
        </div>
      )}
      {icon && <div className={classes.icon}>{icon}</div>}
      <Span16 className={classes.title}>{title}</Span16>
    </>
  )

  if (link && !disable)
    return (
      <Link
        className={join([classes.wrapper, disable && classes.disable])}
        to={link}
        onClick={handleClick}
      >
        {OptionBody}
      </Link>
    )

  return (
    <li
      className={join([classes.wrapper, disable && classes.disable])}
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
