import React from "react"
import TariffPrice from "./"

export default {
  title: "vsevmeste/Text/Price/TariffPrice",
  component: TariffPrice,
}

const Template = (args) => <TariffPrice {...args} />
// NormalState
export const NormalState = Template.bind({})

NormalState.args = {
  children: "1243",
  className: "",
}
