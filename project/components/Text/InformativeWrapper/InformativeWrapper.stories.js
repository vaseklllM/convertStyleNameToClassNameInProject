import React from "react"
import { ReactSVG } from "react-svg"
import { refresh } from "@/public/icons"
import InformativeWrapper from "./"
import { informativeWrapperPositions } from "./enums"

export default {
  title: "vsevmeste/Text/InformativeWrapper",
  component: InformativeWrapper,
}

const Template = (args) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "350px",
    }}
  >
    <div style={{ display: "inline-block" }}>
      <InformativeWrapper {...args}>
        <ReactSVG src={refresh} />
      </InformativeWrapper>
    </div>
  </div>
)

// bottom
export const bottom = Template.bind({})

bottom.args = {
  label: "Проверить наличие обновлений",
  position: informativeWrapperPositions.bottom,
}

// top
export const top = Template.bind({})

top.args = {
  label: "Проверить наличие обновлений",
}
