import React from "react"
import "./style.scss"
import PropTypes from "prop-types"

function getNode(Node, styleName = Node) {
  function TextNode({ children, ...props }) {
    return (
      <Node {...props} styleName={styleName}>
        {children}
      </Node>
    )
  }

  TextNode.propTypes = {
    children: PropTypes.any,
  }

  return TextNode
}

const H = (n) => getNode(`h${n}`)
const P = (n) => getNode("p", `p${n}`)
const Span = (n) => getNode("span", `span${n}`)

export const H1 = H(1)
export const H2 = H(2)
export const H3 = H(3)
export const H4 = H(4)
export const H5 = H(5)
export const H6 = H(6)
export const P10 = P(10)
export const P12 = P(12)
export const P14 = P(14)
export const P16 = P(16)
export const P18 = P(18)
export const P12bold = P("12bold")
export const P14bold = P("14bold")
export const Span10 = Span(10)
export const Span12 = Span(12)
export const Span14 = Span(14)
export const Span16 = Span(16)
export const Span18 = Span(18)
export const Span12bold = Span("12bold")
export const Span14bold = Span("14bold")
export const Span16bold = Span("16bold")
export const Span18bold = Span("18bold")
