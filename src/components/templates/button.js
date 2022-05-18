import React from "react"
import { Link } from "gatsby"
import * as style from "../css/button.module.scss"
export default function button(props) {
  return (
    <Link to={props.link}>
      <button className={style.button}>{props.name}</button>
    </Link>
  )
}
