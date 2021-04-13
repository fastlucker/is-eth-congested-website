import { builder } from "@builder.io/react"
// a set of widgets you can use in the editor, optional.
// import "@builder.io/widgets"
/**
 * Import all custom components so you can use in the builder.io editor
 * https://www.builder.io/c/docs/custom-react-components
 */
import "common/components/Common.builder"
import "common/components/Header"
import "common/components/Footer"
import "common/components/Newsletter"
import "features/gasTracker/GasTrackers"
import "features/gasTrend/IsEthCongested"
import "features/gasTrend/GasTrendChart"
import config from "./src/config"

builder.init(config.builderAPIKey)
