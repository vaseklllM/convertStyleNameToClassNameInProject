import PropTypes from "prop-types"

const ptPermission = {
  data: PropTypes.exact({
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    checkbox: PropTypes.exact({
      isClickable: PropTypes.bool,
      value: PropTypes.bool.isRequired,
    }),
  }),
  styleName: PropTypes.string,
  onChange: PropTypes.func
}

export default ptPermission
