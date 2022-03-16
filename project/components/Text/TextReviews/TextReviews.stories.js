import React from "react"
import TextReviews from "./"

export default {
  title: "vsevmeste/Text/TextReviews",
  component: TextReviews,
}

const Template = (args) => <TextReviews {...args} />
// NormalState
export const NormalState = Template.bind({})

NormalState.args = {
  pcs: 33,
  className: "",
  companyId: 35,
}
