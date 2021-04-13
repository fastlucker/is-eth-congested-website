import * as React from "react"
import PropTypes from "prop-types"
// import { Link } from "gatsby"
import { Builder } from "@builder.io/react"
import { makeStyles } from "@material-ui/core/styles"
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Container,
  Chip,
  Box,
} from "@material-ui/core"
import {
  WidgetsRounded as WidgetsIcon,
  AttachMoneyRounded as MoneyIcon,
  EvStationRounded as EvStationIcon,
} from "@material-ui/icons"
import { useSelector } from "react-redux"
import { selectGasInfo } from "features/gasTracker/gasTrackerSlice"

const useStyles = makeStyles(theme => ({
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      flexGrow: 1,
    },
  },
}))

const Header = ({ title, showBlockNumber, showEthPrice }) => {
  const classes = useStyles()
  const gasInfo = useSelector(selectGasInfo)
  return (
    <AppBar position="static" color="primary">
      <Container>
        <Toolbar variant="regular" disableGutters>
          <IconButton
            edge="start"
            // className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <EvStationIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            {title || `Is Ethereum Congested?`}
          </Typography>
          {/* TODO: maybe do something on the right side as well */}
          {showBlockNumber && (
            <Box px={1}>
              <Chip
                label={`Block # ${
                  gasInfo?.sources?.[0]?.lastBlock ?? "loading"
                }`}
                icon={<WidgetsIcon fontSize={"small"} />}
                color="primary"
              />
            </Box>
          )}
          {showEthPrice && (
            <Box px={1}>
              <Chip
                label={`${gasInfo?.ethPrice ?? 0} ETH/USD`}
                icon={<MoneyIcon fontSize={"small"} />}
                color="primary"
              />
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}

Builder.registerComponent(Header, {
  // NOTE: never name a component the same as a model
  name: "Header",
  // Optionally give a custom icon (image url - ideally a black on transparent bg svg or png)
  image: "https://img.icons8.com/ios-filled/344/document-header.png",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Your Title Here",
    },
    {
      name: "showBlockNumber",
      type: "boolean",
      defaultValue: true,
    },
    {
      name: "showEthPrice",
      type: "boolean",
      defaultValue: true,
    },
  ],
})

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
