import * as React from "react"
import PropTypes from "prop-types"
// import { Link } from "gatsby"
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
  AccessTimeRounded as TimeIcon,
  AttachMoneyRounded as MoneyIcon,
  EvStationRounded as EvStationIcon,
} from "@material-ui/icons"
import { useSelector } from "react-redux"
import { selectGasInfo } from "features/gasTracker/gasTrackerSlice"
import get from "lodash.get"

const useStyles = makeStyles(theme => ({
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      flexGrow: 1,
    },
  },
}))

const Header = ({ siteTitle }) => {
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
            Is Ethereum Congested?
          </Typography>
          {/* TODO: maybe do something on the right side as well */}
          <Box px={1}>
            <Chip
              label={`Block # ${get(
                gasInfo,
                `sources.0.lastBlock`,
                "loading"
              )} `}
              icon={<WidgetsIcon fontSize={"small"} />}
            />
          </Box>
          <Box px={1}>
            <Chip
              label={`${get(gasInfo, "ethPrice", 0)} ETH/USD`}
              icon={<MoneyIcon fontSize={"small"} />}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
