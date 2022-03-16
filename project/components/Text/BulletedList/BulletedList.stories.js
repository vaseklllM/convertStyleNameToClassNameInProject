import React from "react"
import BulletedList from "./"

export default {
  title: "vsevmeste/Text/BulletedList",
  component: BulletedList,
}

const Template = (args) => <BulletedList {...args} />
// NormalState
export const NormalState = Template.bind({})

NormalState.args = {
  list: ["li", "li", "li", "li", "li"],
}
