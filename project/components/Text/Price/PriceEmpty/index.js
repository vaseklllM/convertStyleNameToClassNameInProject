import PropTypes from "prop-types"

export default function PriceEmpty(props) {
  const { children } = props
  return children
}

PriceEmpty.propTypes = {
  children: PropTypes.string,
}
