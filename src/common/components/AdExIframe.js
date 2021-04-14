import React from "react"
import PropTypes from "prop-types"
import { Builder } from "@builder.io/react"

const validAdExURL = "https://viewm.moonicorn.network/#"
function AdExIframe({ src, className, requiredWidth, requiredHeight }) {
  const validSrc = (src || "").startsWith(validAdExURL)
  if (!validSrc) return "Invalid AdEx Ad src..." //TODO: return a better component
  const params = src.replace(validAdExURL, "")
  try {
    const { width, height } = JSON.parse(decodeURIComponent(params))?.options

    if (
      requiredWidth &&
      requiredHeight &&
      requiredWidth.toString() !== width &&
      requiredHeight.toString() !== height
    ) {
      return (
        <>
          <p>{`Please add an ad with dimensions: ${requiredWidth}x${requiredHeight}`}</p>
          <p>{`Your ad dimensions: ${width}x${height}`}</p>
        </>
      )
    }

    return (
      <iframe
        // must have unique title property jsx-a11y/iframe-has-title
        title={`adex-iframe-${Math.random().toString(36).substring(7)}`}
        src={`https://viewm.moonicorn.network/#${params}`}
        width={`${width}`}
        height={`${height}`}
        scrolling="no"
        frameBorder="0"
        style={{ border: 0 }}
        className={className}
        onLoad={window.addEventListener(
          "message",
          function (ev) {
            if (
              ev.data.hasOwnProperty("adexHeight") &&
              "https://viewm.moonicorn.network" === ev.origin
            ) {
              for (let f of document.getElementsByTagName("iframe")) {
                if (f.contentWindow === ev.source) {
                  f.height = ev.data.adexHeight
                }
              }
            }
          },
          false
        )}
      ></iframe>
    )
  } catch (error) {
    console.error(error)
    return "Error occurred parsing params"
  }
}

Builder.registerComponent(AdExIframe, {
  // NOTE: never name a component the same as a model
  name: "AdExIframe",
  // Optionally give a custom icon (image url - ideally a black on transparent bg svg or png)
  image: "https://img.icons8.com/ios-filled/344/web-advertising.png",
  inputs: [
    {
      name: "src",
      type: "string",
      defaultValue: "",
    },
  ],
})

AdExIframe.propTypes = {
  src: PropTypes.string,
}

export default AdExIframe
