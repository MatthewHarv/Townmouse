import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as style from "../components/css/home.module.scss"
import Landingimage from "../components/landingimg/landingimage"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Landingimage></Landingimage>
    <div className={style.lead}>
      <h1>Our Story</h1>
      <p>
        Established in 2011, the Conservatory was the first "living bar" to be
        built in the world - the bar is a living wall of plants. Situated in
        Auckland city centre and directly on the waterfront, we are incredibly
        proud to be an individually owned and operated, free trade bar and
        restaurant, with the same owners from day one.
      </p>
      <Link to="/about/">View More</Link> <br />
    </div>
    <p></p>
  </Layout>
)

export default IndexPage

/*

import { StaticImage } from "gatsby-plugin-image"

import { Link } from "gatsby"
 //  <Link to="/page-2/">Go to page 2</Link> <br />
*/
