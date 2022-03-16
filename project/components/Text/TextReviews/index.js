import { num } from "@/utils"
import React from "react"
import "./style.scss"
import { getEndWordTypes } from "@/utils/number/getEndWord"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { routes } from "@/routes"

function TextReviews({ pcs, companyId, isArticle, articleId }) {
  if (typeof pcs !== "number") return null

  const to = isArticle
    ? routes.allFeedbacks.url({ type: "article", id: articleId })
    : routes.allFeedbacks.url({ type: "company", id: companyId })

  return (
    <Link styleName="txt" to={to}>
      {num.getEndWord(pcs, { type: getEndWordTypes.feedback })}
    </Link>
  )
}

TextReviews.propTypes = {
  pcs: PropTypes.number,
  className: PropTypes.string,
  companyId: PropTypes.number,
  disable: PropTypes.bool,
  isArticle: PropTypes.bool,
  articleId: PropTypes.number,
}

export default TextReviews
