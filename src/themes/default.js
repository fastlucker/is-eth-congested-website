import { createMuiTheme } from "@material-ui/core"
import { green } from "@material-ui/core/colors"

export const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: green[500],
    },
    background: {
      paper: "#fbfbfb",
    },
  },
  typography: {
    fontFamily: "monospace",
  },
})
