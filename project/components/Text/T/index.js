// фенкция переводит текст по id
import { connect } from "react-redux"
import PropTypes from "prop-types"

const T = ({ children }) => {
  let text = ""

  if (typeof children === "string") text = children
  // if (typeof children === "object") {
  //   const activeTranslate = children[activeLang.LanguageId]
  //   if (typeof activeTranslate === "string") text = activeTranslate
  // }
  return text
}

const mapState = ({ language }) => ({
  activeLang: language.activeLang,
})

T.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

export default connect(mapState)(T)
