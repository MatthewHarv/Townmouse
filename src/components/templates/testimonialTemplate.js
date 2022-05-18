import React, { Component } from "react"
import * as style from "../css/testimonials.module.scss"

export default class testimonialTemplate extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            {this.props.data.map(link => {
              return (
                <div key={link.id} className={style.contentContainer}>
                  <h2 className={style.name}>{link.name}</h2>
                  <p className={style.description}>{link.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
