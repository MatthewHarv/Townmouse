import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as style from "../components/css/home.module.scss"
import Landingimage from "../components/landingimg/landingimage"
import { StaticImage } from "gatsby-plugin-image"

import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Landingimage></Landingimage>
    <div className={style.aboutSummary}>
      <div className={style.storyContainer}>
        <h1 className={style.leadingHeader}>Our Story</h1>
        <h2 className={style.leadingTopic}>ABOUT US</h2>
        <p className={style.contentAbout}>
          Established in 2011, the Conservatory was the first "living bar" to be
          built in the world - the bar is a living wall of plants. Situated in
          Auckland city centre and directly on the waterfront, we are incredibly
          proud to be an individually owned and operated, free trade bar and
          restaurant, with the same owners from day one.
        </p>
      </div>
      <div className={style.consumablesContainer}>
        <div className={style.foodContainer}>
          <h1 className={style.leadingHeader}>Our Selection</h1>
          <h2 className={style.leadingTopic}>FOOD</h2>

          <p className={style.content}>
            All of our food is made fresh daily on site, with the highest
            quality produce, all free range and predominantly locally sourced.
            Being on a working wharf we can truly say that our seafood is fresh
            off the boat.
          </p>
        </div>
        <div className={style.imageContainer}>
          <StaticImage
            className={style.coffee}
            src="../images/coffee.jpg"
            alt="Coffee"
            formats={["AUTO", "WEBP"]}
          />
        </div>
        <div className={style.drinkContainer}>
          <h1 className={style.leadingHeader}>Our Choice</h1>
          <h2 className={style.leadingTopic}>DRINK</h2>
          <p className={style.content}>
            Our ever evolving drinks list is testament to what a free trade
            venue can offer. Unlike the vast majority of venues in New Zealand,
            who all have to stock the same products because of their agreements
            with big breweries, our drinks list is 100% based on quality and is
            chosen by our passionate team.
          </p>
          <Link to="/about/">View More</Link> <br />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage

/*

import { StaticImage } from "gatsby-plugin-image"

import { Link } from "gatsby"
 //  <Link to="/page-2/">Go to page 2</Link> <br />
*/
