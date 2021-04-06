import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {
  Grid,
  makeStyles,
  Paper,
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
            ].map(value => (
              <Grid key={value} item md={4} xs={12}>
                <Paper elevation={4} color="default" className={classes.paper}>
                  <Grid container spacing={2}>
                    <Grid item>
                      <ButtonBase className={classes.emoji}>
                        {value.emoji}
                      </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography gutterBottom variant="subtitle1">
                            {value.title}
                          </Typography>
                          <Typography variant="h2">120</Typography>
                          <Typography variant="body2" color="textSecondary">
                            Time: {value.time}
                          </Typography>
                        </Grid>
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
