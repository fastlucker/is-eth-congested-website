import React from "react"
import { Paper, Box, Typography, makeStyles } from "@material-ui/core"
import { LineChart } from "common/components/LineChart"
import { useSelector } from "react-redux"
import {
  selectGasTrendAverage,
  selectGasTrendChartData,
} from "features/gasTrend/gasTrendSlice"

const useStyles = makeStyles(theme => ({
  paper: {
    backgroundColor: theme.palette.primary.main,
  },
}))

export default function GasTrendChart() {
  const classes = useStyles()
  const data = useSelector(selectGasTrendChartData)
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
          Last 7 Days Gas Trend
        </Typography>
      </Box>
      <Paper className={classes.paper} elevation={3}>
        <Box p={3}>
          <Box height={400}>
            <LineChart
              data={data}
              markers={[{ title: "avg. normal", value: normalAverage }]}
            />
          </Box>
        </Box>
      </Paper>
    </>
  )
}
