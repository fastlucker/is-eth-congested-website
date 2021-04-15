import * as React from "react"
import { Link } from "gatsby"

const CustomLink = props => {
  const internal = props.target !== "_blank" && /^\/(?!\/)/.test(props.href)
  if (internal) {
    return <Link activeClassName="active-link" to={props.href} {...props} />
  }
  return <a {...props} />
}

export default CustomLink
