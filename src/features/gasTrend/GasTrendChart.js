import React from "react"
import {
  Paper,
  Box,
  Typography,
  LinearProgress,
  makeStyles,
} from "@material-ui/core"
import { LineChart } from "common/components/LineChart"
import { useSelector } from "react-redux"
import {
  selectGasTrendAverage,
  selectGasTrendChartData,
  selectGasTrendStatus,
} from "features/gasTrend/gasTrendSlice"
import { Builder } from "@builder.io/sdk"

const useStyles = makeStyles(theme => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
  },
  bar: {
    borderRadius: "5px 5px 0 0",
  },
}))

export default function GasTrendChart({
  title = "Last 7 Days Gas Trend",
  averageNormalTitle = "avg. normal",
  chartHeight = 400,
}) {
  const classes = useStyles()
  const data = useSelector(selectGasTrendChartData)
  const status = useSelector(selectGasTrendStatus)
  const normalAverage = useSelector(state =>
    selectGasTrendAverage(state, "normal")
  )
  return (
    <>
      <Box p={2}>
        <Typography
          align="center"
          variant="h5"
          component="h2"
          color="textSecondary"
        >
          {title}
        </Typography>
      </Box>
      <Paper className={classes.paper}>
        {status !== "idle" && (
          <LinearProgress className={classes.bar} color="secondary" />
        )}
        <Box p={3}>
          <Box height={chartHeight}>
            <LineChart
              data={data}
              markers={[{ title: averageNormalTitle, value: normalAverage }]}
            />
          </Box>
        </Box>
      </Paper>
    </>
  )
}

Builder.registerComponent(GasTrendChart, {
  name: "Gas Trend Chart",
  // Optionally give a custom icon (image url - ideally a black on transparent bg svg or png)
  image: "https://img.icons8.com/ios-filled/344/combo-chart--v1.png",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Last 7 Days Gas Trend",
    },
    {
      name: "averageNormalTitle",
      type: "string",
      defaultValue: "avg. normal",
    },
    {
      name: "chartHeight",
      type: "number",
      defaultValue: 400,
    },
    {
      name: "loadingMessage",
      type: "string",
      defaultValue: "Loading...",
    },
  ],
})
