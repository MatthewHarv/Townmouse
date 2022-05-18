import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { BgImage } from "gbimage-bridge"
import { getImage } from "gatsby-plugin-image"
import * as style from "../css/about.module.scss"

export default function Cover() {
  const { placeholderImage123 } = useStaticQuery(
    graphql`
      query {
        placeholderImage123: file(relativePath: { eq: "food/cabnet2.jpg" }) {
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
      <BgImage image={pluginImage} className={style.cover}></BgImage>
    </div>
  )
}
