import React from "react"
import {
  Grid,
  makeStyles,
  Paper,
  Box,
  ButtonBase,
  Typography,
  LinearProgress,
} from "@material-ui/core"
import { useSelector } from "react-redux"
import { selectGasInfo, selectGasInfoStatus } from "./gasTrackerSlice"
import { Builder } from "@builder.io/react"
import AdExIframe from "common/components/AdExIframe"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
  },
  control: {
    padding: theme.spacing(2),
  },
  adPaper: {
    border: 0,
    borderRadius: 4,
    boxShadow: theme.shadows[1],
  },
  bar: {
    borderRadius: "5px 5px 0 0",
  },
  emoji: {
    width: "100%",
    height: "100%",
    fontSize: 60,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}))

const defaultValues = [
  {
    emoji: "🐢",
    title: "Slow",
    time: "under 30 minutes",
    gasInfoNaming: "slow",
  },
  {
    emoji: "🐇",
    title: "Normal",
    time: "under 5 minutes",
    gasInfoNaming: "normal",
  },
  {
    emoji: "🚀",
    title: "Fast",
    time: "under 2 minute",
    gasInfoNaming: "fast",
  },
  {
    emoji: "⚡",
    title: "Instant",
    time: "under 30 seconds",
    gasInfoNaming: "instant",
  },
]

export default function GasTrackers(props) {
  const classes = useStyles()
  const gasInfo = useSelector(selectGasInfo)
  const status = useSelector(selectGasInfoStatus)
  const {
    title,
    adexAdSrc,
    cashEmoji,
    timeEmoji,
    firstBox,
    secondBox,
    thirdBox,
    fourthBox,
  } = props
  const dataArray = [firstBox, secondBox, thirdBox, fourthBox]
  const boxesDataArray = dataArray.some(i => !i) ? defaultValues : dataArray
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Box py={2}>
          <Typography
            align="center"
            variant="h5"
            component="h2"
            color="textSecondary"
          >
            {title || "Current Gas Price"}
          </Typography>
        </Box>
        <Grid container justify="space-between" spacing={2}>
          {boxesDataArray.map((value, idx) => (
            <Grid key={idx} item xs>
              {status !== "idle" && (
                <LinearProgress className={classes.bar} color="secondary" />
              )}
              <Paper color="primary" className={classes.paper}>
                <Grid container spacing={2}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    flexDirection="column"
                    width={1}
                  >
                    <ButtonBase className={classes.emoji}>
                      <Box p={3}>{value.emoji}</Box>
                    </ButtonBase>
                  </Box>
                  <Grid item xs={12} sm container>
                    <Grid item container spacing={2} justify="center">
                      <Box
                        display="flex"
                        justifyContent="center"
                        flexDirection="column"
                      >
                        <Typography align="center" variant="h6">
                          {value.title}
                        </Typography>
                        <Typography align="center" variant="h2">
                          {gasInfo?.[value.gasInfoNaming]?.gwei ?? 0}
                        </Typography>
                        <Typography
                          align="center"
                          variant="body2"
                          color="textSecondary"
                        >
                          {timeEmoji || "⏲"} {value.time}
                        </Typography>
                        <Typography
                          align="center"
                          variant="body2"
                          color="textSecondary"
                        >
                          {cashEmoji || "💸"}{" "}
                          {gasInfo?.[value.gasInfoNaming]?.usd ?? 0}$
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
          {adexAdSrc && (
            <Grid item xs>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <AdExIframe
                  src={adexAdSrc}
                  requiredWidth={300}
                  requiredHeight={250}
                  className={classes.adPaper}
                />
              </Box>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  )
}

const commonFields = {
  type: "object",
  required: true,
  subFields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "emoji",
      type: "string",
    },
    {
      name: "time",
      type: "string",
    },
    {
      name: "gasInfoNaming",
      enum: ["slow", "normal", "fast", "instant"],
    },
  ],
}

Builder.registerComponent(GasTrackers, {
  name: "GasTrackers",
  // Optionally give a custom icon (image url - ideally a black on transparent bg svg or png)
  image: "https://img.icons8.com/ios-filled/344/gas-station.png",
  inputs: [
    {
      name: "adexAdSrc",
      type: "string",
      defaultValue:
        "https://viewm.moonicorn.network/#%7B%22options%22%3A%7B%22publisherAddr%22%3A%220xB7d3F81E857692d13e9D63b232A90F4A1793189E%22%2C%22whitelistedTokens%22%3A%5B%220x6B175474E89094C44Da98b954EedeAC495271d0F%22%5D%2C%22whitelistedType%22%3A%22legacy_300x250%22%2C%22randomize%22%3Atrue%2C%22targeting%22%3A%5B%5D%2C%22width%22%3A%22300%22%2C%22height%22%3A%22250%22%2C%22minPerImpression%22%3A%220%22%2C%22fallbackUnit%22%3Anull%2C%22marketSlot%22%3A%22QmbYBxNPKp2ujNVKsGSRWYMoPZ54vrqYRo1tTJ3nxvyLMX%22%7D%7D",
    },
    {
      name: "title",
      type: "string",
      defaultValue: "Current Gas Price",
    },
    {
      name: "timeEmoji",
      type: "string",
      defaultValue: "⏲",
    },
    {
      name: "cashEmoji",
      type: "string",
      defaultValue: "💸",
    },
    {
      name: "firstBox",
      defaultValue: {
        emoji: "🐢",
        title: "Slow",
        time: "under 30 minutes",
        gasInfoNaming: "slow",
      },
      ...commonFields,
    },
    {
      name: "secondBox",
      defaultValue: {
        emoji: "🐇",
        title: "Normal",
        time: "under 5 minutes",
        gasInfoNaming: "normal",
      },
      ...commonFields,
    },
    {
      name: "thirdBox",
      defaultValue: {
        emoji: "🚀",
        title: "Fast",
        time: "under 2 minute",
        gasInfoNaming: "fast",
      },
      ...commonFields,
    },
    {
      name: "fourthBox",
      defaultValue: {
        emoji: "⚡",
        title: "Instant",
        time: "under 30 seconds",
        gasInfoNaming: "instant",
      },
      ...commonFields,
    },
  ],
})
