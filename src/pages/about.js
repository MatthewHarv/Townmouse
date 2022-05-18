import React, { Component } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Landingcover from "../components/landingimg/aboutimage"
import * as style from "../components/css/about.module.scss"
export default class about extends Component {
  render() {
    return (
      <Layout>
        <Seo title="About" />
        <Landingcover></Landingcover>
        <div className={style.aboutContainer}>
          <h2 className={style.title}>About Us</h2>
          <p className={style.content}>
            Established in 2011, Town Mouse was built to provide quality food
            and drinks to the community of Pukekohe .
          </p>
          <p className={style.content}>
            Situated in the heart of Pukekohe, we are incredibly proud to be an
            individually owned and operated cafe, with the same owners from day
            one.
          </p>
          <p className={style.content}>
            We are pround to make many of our sauces in-house which go with our
            delicious products such as our Homemade waffles. We are also famouse
            for our Town mouse burgers.
          </p>
          <p className={style.content}>
            Built and designed with the strong ethos that a great drinking and
            dining experience doesn't need to be pretentious, the venue has a
            multitude of comfortable seating options to suit everyone.
          </p>
          <p className={style.content}>We call it casual dining.</p>
          <p className={style.content}>
            That certainly doesn't mean our approach is casual to delivering
            high standards, exactly the opposite, rather that we provide
            excellent service in a relaxed environment where everyone feels
            welcome.
          </p>
          <p className={style.content}>
            What does drive us is creating the best atmosphere, with awesome
            food and impressive drinks to bring great people together, whatever
            the occasion.
          </p>
          <p className={style.content}>
            So, next time you're planning a get together, get it all together
            here.
          </p>
          <p className={style.content}>Town Mouse - Best cafe in Pukekohe.</p>
        </div>
      </Layout>
    )
  }
}
