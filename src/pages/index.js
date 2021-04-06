import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {
  Grid,
  makeStyles,
  Paper,
  Box,
  ButtonBase,
  Typography,
} from "@material-ui/core"
import Layout from "../templates/layout"
import SEO from "../common/seo"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
    backgroundColor: theme.palette.background.default,
  },
  control: {
    padding: theme.spacing(2),
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

const IndexPage = () => {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="Home" />
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {[
              { emoji: "🐢", title: "Slow", time: "over 10 minutes" },
              { emoji: "🚀", title: "Normal", time: "under 3 minutes" },
              { emoji: "⚡", title: "Fast", time: "under 1 minute" },
            ].map((value, idx) => (
              <Grid key={idx} item md={4} xs={12}>
                <Paper elevation={4} color="default" className={classes.paper}>
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
                            120
                          </Typography>
                          <Typography
                            align="center"
                            variant="body2"
                            color="textSecondary"
                          >
                            Time: {value.time}
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default IndexPage
