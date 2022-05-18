import React, { Component } from "react"
import * as style from "../css/menu.module.scss"

export default class menuTemplate extends Component {
  render() {
    return (
      <div className={style.menuTemplateContainer}>
        <div>
          <div>
            <h2 className={style.title}>Food</h2>
            <div className={style.menuContainer}>
              {this.props.fooddata.map(link => {
                return (
                  <div key={link.id}>
                    <h3 className={style.item}>{link.item}</h3>
                    <p className={style.description}>{link.description}</p>
                    <p className={style.price}>{link.price}</p>
                  </div>
                )
              })}
            </div>
          </div>
          <h2 className={style.title}>Drinks</h2>
          <div>
            <h3 className={style.subtitle}>Coffee</h3>
            <div className={style.menuContainer}>
              {this.props.coffeedata.map(link => {
                return (
                  <div key={link.id}>
                    <h3 className={style.item}>{link.item}</h3>
                    <p className={style.price}>{link.price}</p>
                  </div>
                )
              })}
            </div>
          </div>
          <div>
            <h3 className={style.subtitle2}>Tea</h3>
            <div className={style.menuContainer}>
              {this.props.teadata.map(link => {
                return (
                  <div key={link.id}>
                    <h3 className={style.item}>{link.item}</h3>
                    <p className={style.price}>{link.price}</p>
                  </div>
                )
              })}
            </div>
          </div>
          <div>
            <h3 className={style.subtitle2}>Juices</h3>
            <div className={style.menuContainer}>
              {this.props.juicedata.map(link => {
                return (
                  <div key={link.id}>
                    <h3 className={style.item}>{link.item}</h3>
                    <p className={style.price}>{link.price}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
