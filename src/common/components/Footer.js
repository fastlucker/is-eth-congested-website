import React from "react"
import { Footer } from "components-extra"
import { Cancel, EvStationRounded, Edit } from "@material-ui/icons"

export default function CustomFooter() {
  return (
    <Footer title="Awesome footer" bottomBanner={<EvStationRounded />}>
      <Footer.Column isInline>
        <Footer.Item
          icon={<Edit />}
          onClick={() => console.log("edit clicked")}
        >
          {"Edit This Site"}
        </Footer.Item>
      </Footer.Column>
    </Footer>
  )
}
