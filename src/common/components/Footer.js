import React from "react"
import { Footer } from "components-extra"
import { EvStationRounded } from "@material-ui/icons"
import { Builder } from "@builder.io/react"

export default function CustomFooter({ title }) {
  return (
    <Footer title={title} bottomBanner={<EvStationRounded />}>
      <Footer.Column isInline></Footer.Column>
    </Footer>
  )
}

Builder.registerComponent(Footer, {
  // NOTE: never name a component the same as a model
  name: "Footer",
  // Optionally give a custom icon (image url - ideally a black on transparent bg svg or png)
  image: "https://img.icons8.com/ios-filled/344/document-footer.png",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Your Title Here",
    },
  ],
})
