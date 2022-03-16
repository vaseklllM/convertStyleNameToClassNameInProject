import React, { useRef } from "react"
import { ReactSVG } from "react-svg"
import ReactTooltip from "react-tooltip"
import PropTypes from "prop-types"

/**
 * Окно информации при наведении или клике на иконку. как компонент RoundInformativeIcon
 * @param {string} className стиль контейнера
 * @param {string} tooltipClasses стиль окна с информамацией
 * @param {string} iconClasses стиль иконки
 * @param {element} icon иконка на которую наводим мышкой
 * @param {object} iconParams параметры для иконки https://www.npmjs.com/package/react-tooltip
 * @param {object} tooltipParams параметры для  https://www.npmjs.com/package/react-tooltip
 * @param {any} children стиль контейнера
 * @param {bool} isLoading для коректного отображения тултипа. если показать до загрузки данных то будет криво показывать.
 * @param {function} onMouseEnter ивент наведения
 * @param {string} dataFor id tooltip
 * @param {string} text
 * @param {JSXElement} node
 * @return {JSXElement} Возвращаем иконку и данные которые будут показыватся при наведении или нажатии на иконку
 * */

export default function Tooltip({
  className,
  iconParams,
  tooltipParams,
  icon,
  iconClasses,
  tooltipClasses,
  children,
  isLoading,
  onMouseEnter = () => {},
  dataFor,
  text,
  node,
}) {
  const ref = useRef()

  return (
    <div className={className}>
      <div
        data-tip
        data-for={dataFor}
        ref={ref}
        {...iconParams}
        onMouseEnter={() => onMouseEnter(ref)}
      >
        {node}
        {icon && <ReactSVG src={icon} className={iconClasses} />}
        {text}
      </div>
      {isLoading && (
        <ReactTooltip
          id={dataFor}
          className={tooltipClasses}
          {...tooltipParams}
        >
          {children}
        </ReactTooltip>
      )}
    </div>
  )
}
Tooltip.propTypes = {
  className: PropTypes.string,
  iconParams: PropTypes.object,
  tooltipParams: PropTypes.object,
  icon: PropTypes.elementType,
  iconClasses: PropTypes.string,
  tooltipClasses: PropTypes.string,
  children: PropTypes.any,
  isLoading: PropTypes.bool,
  onMouseEnter: PropTypes.func,
  dataFor: PropTypes.string,
  text: PropTypes.string,
  node: PropTypes.element,
}
