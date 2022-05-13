import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { BgImage } from "gbimage-bridge"
import { getImage } from "gatsby-plugin-image"
import * as style from "../css/home.module.scss"

export default function Cover() {
  const { placeholderImage123 } = useStaticQuery(
    graphql`
      query {
        placeholderImage123: file(relativePath: { eq: "townmouse.jpg" }) {
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
          <h1 className={style.landingHeader}>Best Café In Pukehohe</h1>
          <p className={style.landingDescription}>
            Amazing Allpress coffee, great a la carte menu, fresh and vibrant
            cabinet food.
          </p>
        </div>
      </BgImage>
    </div>
  )
}
