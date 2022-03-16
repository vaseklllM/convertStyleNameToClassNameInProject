import React from "react"
import PropTypes from "prop-types"

export const InfoIcon = (props) => {
  const { className,size } = props
  const imgSize = size || "16"
  const params = {
    stroke: "#ADADAD",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  }
  InfoIcon.propTypes = {
    size: PropTypes.string,
    className: PropTypes.string,
  }
  return (
    <svg
      width={imgSize}
      height={imgSize}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M8.00065 14.6663C11.6825 14.6663 14.6673 11.6816 14.6673 7.99967C14.6673 4.31778 11.6825 1.33301 8.00065 1.33301C4.31875 1.33301 1.33398 4.31778 1.33398 7.99967C1.33398 11.6816 4.31875 14.6663 8.00065 14.6663Z'
        {...params}
      />
      <path d='M8 10.6667V8' {...params} />
      <path d='M8 5.33301H8.00667' {...params} />
    </svg>
  )
}

InfoIcon.propTypes = {
  className: PropTypes.string,
}
