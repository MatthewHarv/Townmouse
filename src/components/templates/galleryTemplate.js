import React, { Component } from "react"
import * as style from "../css/gallery.module.scss"

export default class galleryTemplate extends Component {
  render() {
    return (
      <div>
        <div>
          <div className={style.imgContainer}>
            {this.props.data.map(link => {
              return (
                <div key={link.id} className={style.img}>
                  {link.image}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
