import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { fade, makeStyles } from "@material-ui/core/styles"
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core"
import {
  Menu as MenuIcon,
  EvStationRounded as EvStationIcon,
} from "@material-ui/icons"

const useStyles = makeStyles(theme => ({
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}))

const Header = ({ siteTitle }) => {
  const classes = useStyles()
  return (
    <AppBar position="static" color="default">
      <Toolbar variant="dense">
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
      </Toolbar>
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
