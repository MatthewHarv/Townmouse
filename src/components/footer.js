import React, { Component } from "react"
import * as style from "../components/css/footer.module.scss"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"

export default class footer extends Component {
  render() {
    return (
      <footer className={style.container}>
        <div>
          <h2 className={style.footerTitle}>Social Media</h2>
          <hr></hr>
          <div className={style.socials}>
            <a
              title="instagram"
              href="https://www.facebook.com/Townmouse191"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className={style.fblogo} />
            </a>
            <a
              title="instagram"
              href="https://www.instagram.com/townmouse191"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className={style.fbinsta} />
            </a>
          </div>
        </div>
        <div>
          <h2 className={style.footerTitle}>Contact</h2>
          <hr></hr>
          <p className={style.footerContent}>Phone: 09 239 1110</p>
          <p className={style.footerContent}>
            Address: 191 King Street, Pukekohe 2120{" "}
          </p>
        </div>
        <div>
          <h2 className={style.footerTitle}>Our Hours</h2>
          <hr></hr>
          <p className={style.footerContent}>8am to 2:30pm</p>
          <p className={style.footerContent}>7 days a week</p>
        </div>
      </footer>
    )
  }
}
