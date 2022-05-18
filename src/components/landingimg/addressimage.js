import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { BgImage } from "gbimage-bridge"
import { getImage } from "gatsby-plugin-image"
import * as style from "../css/address.module.scss"

export default function Cover() {
  const { placeholderImage123 } = useStaticQuery(
    graphql`
      query {
        placeholderImage123: file(relativePath: { eq: "townoutside.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 100
              formats: [AUTO, AVIF]
              placeholder: BLURRED
            )
          }
        }
      }
    `
  )
  const pluginImage = getImage(placeholderImage123)

  return (
    <div>
      <BgImage image={pluginImage} className={style.cover}>
        <div>
          <h1 className={style.landingHeader}>Come visit us</h1>
          <p className={style.landingDescription}>
            191 King Street, Pukekohe 2120
          </p>
        </div>
      </BgImage>
    </div>
  )
}
