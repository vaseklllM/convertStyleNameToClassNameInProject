import React, { Component } from "react"
import "./style.scss"
import PropTypes from "prop-types"
import { arr } from "../../../utils"
import { H4 } from "../Text"
import Permission from "../Permission"
import ptPermission from "../Permission/propTypes"

class Permissions extends Component {
  state = {
    data: this.props.data,
  }

  // изменение checkbox
  changeChecbox = ({ value, id }) => {
    this.setState(({ data }) => {
      const newData = data.map((el) => {
        if (el.id === id) {
          return { ...el, checkbox: { ...el.checkbox, value: value } }
        } else return el
      })

      return { data: newData }
    })
  }

  componentDidUpdate(prevProps, prevState) {
    const { onChange } = this.props
    const { data } = this.state
    if (arr.isNotEqual(data, prevState.data)) onChange(data)
    if (arr.isNotEqual(this.props.data, prevProps.data)) {
      this.setState({ data: this.props.data })
    }
  }

  render() {
    const { title, className } = this.props
    const { data } = this.state

    return (
      <div styleName='Permissions' className={className}>
        <H4>{title}</H4>
        <div styleName='Permissions-body'>
          {data.map((el) => (
            <Permission
              key={el.id}
              onChange={this.changeChecbox}
              data={el}
              styleName='Permissions-body-item'
            />
          ))}
        </div>
      </div>
    )
  }
}

Permissions.defaultProps = {
  title: "С правами:",
  onChange: () => {},
}

Permissions.propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(ptPermission.data).isRequired,
  title: PropTypes.string,
  onChange: PropTypes.func,
}

export default Permissions
