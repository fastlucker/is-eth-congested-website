import { createMuiTheme } from "@material-ui/core"
import { grey } from "@material-ui/core/colors"
import green from "@material-ui/core/colors/green"

export const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: grey[50],
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    fontFamily: "monospace",
  },
})
