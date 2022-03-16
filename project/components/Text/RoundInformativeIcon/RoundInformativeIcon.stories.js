import React from "react"
import RoundInformativeIcon from "./"
import AlertCircleIcon from "../../Icons/AlertCircleIcon"

export default {
  title: "vsevmeste/Text/RoundInformativeIcon",
  component: RoundInformativeIcon,
}

const Template = (args) => (
  <div style={{ marginLeft: "350px", marginTop: "150px" }}>
    <RoundInformativeIcon {...args} />
  </div>
)
// bottom
export const bottom = Template.bind({})

bottom.args = {
  tooltipClassName: "",
  className: "",
  bodyClassName: "",
  children: "children",
  w: 100,
  Icon: <AlertCircleIcon />,
  size: 30,
  position: "bottom",
}
// top
export const top = Template.bind({})

top.args = {
  tooltipClassName: "",
  className: "",
  bodyClassName: "",
  children: "children",
  w: 100,
  Icon: <AlertCircleIcon />,
  size: 30,
  position: "top",
}
// left
export const left = Template.bind({})

left.args = {
  tooltipClassName: "",
  className: "",
  bodyClassName: "",
  children: "children",
  w: 100,
  Icon: <AlertCircleIcon />,
  size: 30,
  position: "left",
}
// right
export const right = Template.bind({})

right.args = {
  tooltipClassName: "",
  className: "",
  bodyClassName: "",
  children: "children",
  w: 100,
  Icon: <AlertCircleIcon />,
  size: 30,
  position: "right",
}
