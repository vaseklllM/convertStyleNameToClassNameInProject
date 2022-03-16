import React from "react"
import TablePrice from "./"

export default {
  title: "vsevmeste/Text/Price/TablePrice",
  component: TablePrice,
}

const Template = (args) => <TablePrice {...args} />
// NormalState
export const NormalState = Template.bind({})

NormalState.args = {
  children: "1243",
  className: "",
}
