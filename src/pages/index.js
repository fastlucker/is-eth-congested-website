import React from "react"
import Layout from "templates/layout"
import SEO from "common/components/seo"
import GasTrackers from "features/gasTracker/GasTrackers"
import IsEthCongested from "features/gasTrend/IsEthCongested"
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from "@devexpress/dx-react-chart-material-ui"
import { Paper, Box, makeStyles } from "@material-ui/core"

const data = [
  { argument: 1, value: 10 },
  { argument: 2, value: 20 },
  { argument: 3, value: 30 },
]
const useStyles = makeStyles(theme => ({
  paper: {
    backgroundColor: theme.palette.background.default,
  },
}))
const IndexPage = () => {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="Home" />
      <IsEthCongested />
      <GasTrackers />
      <Box py={3}>
        <Paper className={classes.paper} elevation={3}>
          <Box p={3}>
            <Chart data={data} height={200}>
              <ArgumentAxis />
              <ValueAxis />
              <LineSeries valueField="value" argumentField="argument" />
            </Chart>
          </Box>
        </Paper>
      </Box>
    </Layout>
  )
}

export default IndexPage
