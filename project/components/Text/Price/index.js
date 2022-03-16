import React from "react"
import PropTypes from "prop-types"
import DefaultPrice from "./DefaultPrice"
import OldPrice from "./OldPrice"
import TariffPrice from "./TariffPrice"
import TablePrice from "./TablePrice"
import FinalPrice from "./FinalPrice"
import FinalTariffPrice from "./FinalTariffPrice"
import PriceEmpty from "./PriceEmpty"
import KitsPrice from "./KitsPrice"
import { ptPrice } from "@/mainPropTypes"
import { usePriceConverter, useSelectorSE } from "@/hooks"
import { priceTypes } from "@/enums"
import H6Price from "./H6Price"
import Span14BoldPrice from "./Span14BoldPrice"

export default function Price(props) {
  const {
    type = priceTypes.default,
    className,
    data,
    isCompany = false,
    companyCurrency = "",
    isProfileCurrency = false,
  } = props

  const { activeCurrency } = useSelectorSE((state) => {
    const currency = state.currency

    const profileCurrency = state.profile.data?.user?.currency

    const activeCurrency =
      profileCurrency && isProfileCurrency
        ? currency.data.find((el) => el.id === profileCurrency.id).name_short
        : currency.activeValute.name_short

    return {
      activeCurrency,
    }
  })
  const price = usePriceConverter(data)

  if (typeof price !== "number" || isNaN(price)) return null
  if (isCompany && !companyCurrency) return null

  const priceStr = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: isCompany ? companyCurrency : activeCurrency,
  }).format(Number(price.toFixed(2)))

  const types = {
    [priceTypes.default]: DefaultPrice,
    [priceTypes.oldPrice]: OldPrice,
    [priceTypes.tariff]: TariffPrice,
    [priceTypes.tablePrice]: TablePrice,
    [priceTypes.final_price]: FinalPrice,
    [priceTypes.final_tariff_price]: FinalTariffPrice,
    [priceTypes.empty]: PriceEmpty,
    [priceTypes.kit]: KitsPrice,
    [priceTypes.h6]: H6Price,
    [priceTypes.span14Bold]: Span14BoldPrice,
    [priceTypes.str]: priceStr,
  }

  const Node = types[type]

  if (typeof Node === "string") return Node

  return <Node className={className}>{priceStr}</Node>
}

Price.propTypes = {
  type: priceTypes._pt, // тип отображение цены
  className: PropTypes.string,
  data: ptPrice,
  isCompany: PropTypes.bool,
  companyCurrency: PropTypes.string, // валюта компании
  isProfileCurrency: PropTypes.bool, // валюта пользователя по дефолту
}
