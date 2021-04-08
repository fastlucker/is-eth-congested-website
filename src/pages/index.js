import React from "react"
import Layout from "templates/layout"
import SEO from "common/components/SEO"
import GasTrackers from "features/gasTracker/GasTrackers"
import IsEthCongested from "features/gasTrend/IsEthCongested"
import { Paper, Box, makeStyles, withStyles } from "@material-ui/core"
import { LineChart } from "common/components/LineChart"
import { useSelector } from "react-redux"
import {
  selectGasTrendAverage,
  selectGasTrendChartData,
} from "features/gasTrend/gasTrendSlice"
const useStyles = makeStyles(theme => ({
  paper: {
    backgroundColor: theme.palette.background.default,
  },
}))

// const data = [
//   {
//     id: "japan",
//     color: "hsl(25, 70%, 50%)",
//     data: [
//       {
//         x: "plane",
//         y: 113,
//       },
//       {
//         x: "helicopter",
//         y: 222,
//       },
//       {
//         x: "boat",
//         y: 279,
//       },
//       {
//         x: "train",
//         y: 19,
//       },
//       {
//         x: "subway",
//         y: 178,
//       },
//       {
//         x: "bus",
//         y: 251,
//       },
//       {
//         x: "car",
//         y: 87,
//       },
//       {
//         x: "moto",
//         y: 2,
//       },
//       {
//         x: "bicycle",
//         y: 101,
//       },
//       {
//         x: "horse",
//         y: 96,
//       },
//       {
//         x: "skateboard",
//         y: 203,
//       },
//       {
//         x: "others",
//         y: 143,
//       },
//     ],
//   },
//   {
//     id: "france",
//     color: "hsl(127, 70%, 50%)",
//     data: [
//       {
//         x: "plane",
//         y: 71,
//       },
//       {
//         x: "helicopter",
//         y: 79,
//       },
//       {
//         x: "boat",
//         y: 276,
//       },
//       {
//         x: "train",
//         y: 150,
//       },
//       {
//         x: "subway",
//         y: 132,
//       },
//       {
//         x: "bus",
//         y: 248,
//       },
//       {
//         x: "car",
//         y: 84,
//       },
//       {
//         x: "moto",
//         y: 161,
//       },
//       {
//         x: "bicycle",
//         y: 299,
//       },
//       {
//         x: "horse",
//         y: 264,
//       },
//       {
//         x: "skateboard",
//         y: 71,
//       },
//       {
//         x: "others",
//         y: 112,
//       },
//     ],
//   },
//   {
//     id: "us",
//     color: "hsl(22, 70%, 50%)",
//     data: [
//       {
//         x: "plane",
//         y: 266,
//       },
//       {
//         x: "helicopter",
//         y: 76,
//       },
//       {
//         x: "boat",
//         y: 133,
//       },
//       {
//         x: "train",
//         y: 53,
//       },
//       {
//         x: "subway",
//         y: 24,
//       },
//       {
//         x: "bus",
//         y: 267,
//       },
//       {
//         x: "car",
//         y: 153,
//       },
//       {
//         x: "moto",
//         y: 111,
//       },
//       {
//         x: "bicycle",
//         y: 171,
//       },
//       {
//         x: "horse",
//         y: 277,
//       },
//       {
//         x: "skateboard",
//         y: 282,
//       },
//       {
//         x: "others",
//         y: 201,
//       },
//     ],
//   },
//   {
//     id: "germany",
//     color: "hsl(342, 70%, 50%)",
//     data: [
//       {
//         x: "plane",
//         y: 183,
//       },
//       {
//         x: "helicopter",
//         y: 223,
//       },
//       {
//         x: "boat",
//         y: 255,
//       },
//       {
//         x: "train",
//         y: 280,
//       },
//       {
//         x: "subway",
//         y: 124,
//       },
//       {
//         x: "bus",
//         y: 204,
//       },
//       {
//         x: "car",
//         y: 190,
//       },
//       {
//         x: "moto",
//         y: 220,
//       },
//       {
//         x: "bicycle",
//         y: 213,
//       },
//       {
//         x: "horse",
//         y: 279,
//       },
//       {
//         x: "skateboard",
//         y: 194,
//       },
//       {
//         x: "others",
//         y: 117,
//       },
//     ],
//   },
//   {
//     id: "norway",
//     color: "hsl(359, 70%, 50%)",
//     data: [
//       {
//         x: "plane",
//         y: 35,
//       },
//       {
//         x: "helicopter",
//         y: 105,
//       },
//       {
//         x: "boat",
//         y: 55,
//       },
//       {
//         x: "train",
//         y: 41,
//       },
//       {
//         x: "subway",
//         y: 157,
//       },
//       {
//         x: "bus",
//         y: 217,
//       },
//       {
//         x: "car",
//         y: 32,
//       },
//       {
//         x: "moto",
//         y: 189,
//       },
//       {
//         x: "bicycle",
//         y: 34,
//       },
//       {
//         x: "horse",
//         y: 67,
//       },
//       {
//         x: "skateboard",
//         y: 244,
//       },
//       {
//         x: "others",
//         y: 255,
//       },
//     ],
//   },
// ]

const IndexPage = () => {
  const classes = useStyles()
  const data = useSelector(selectGasTrendChartData)
  const normalAverage = useSelector(state =>
    selectGasTrendAverage(state, "normal")
  )
  console.log(normalAverage)
  return (
    <Layout>
      <SEO title="Home" />
      <IsEthCongested />
      <GasTrackers />
      <Box py={3}>
        <Paper className={classes.paper} elevation={3}>
          <Box height={400} p={3}>
            <LineChart
              data={data}
              markers={[{ title: "average", value: normalAverage }]}
            />
          </Box>
        </Paper>
      </Box>
    </Layout>
  )
}

export default IndexPage
