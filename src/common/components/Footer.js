import React from "react"
import { Footer } from "components-extra"
import { Cancel, EvStationRounded, Edit } from "@material-ui/icons"
import { useCMS } from "tinacms"

export default function CustomFooter() {
  const cms = useCMS()
  return (
    <Footer title="Awesome footer" bottomBanner={<EvStationRounded />}>
      <Footer.Column isInline>
        <Footer.Item
          icon={!cms.enabled ? <Edit /> : <Cancel />}
          onClick={() => cms.toggle()}
        >
          {cms.enabled ? "Exit Edit Mode" : "Edit This Site"}
        </Footer.Item>
      </Footer.Column>
    </Footer>
  )
}
