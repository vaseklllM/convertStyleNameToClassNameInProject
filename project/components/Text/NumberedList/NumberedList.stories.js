import React from "react"
import NumberedList from "./"

export default {
  title: "vsevmeste/Text/NumberedList",
  component: NumberedList,
}

const Template = (args) => <NumberedList {...args} />
// NormalState
export const NormalState = Template.bind({})

NormalState.args = {
  list: ["li", "li", "li", "li", "li"],
}
