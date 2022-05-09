import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Landingcover from "../components/landingimg/aboutimage"

const About = () => (
  <Layout>
    <Seo title="About" />
    <Landingcover></Landingcover>
    <h1>Hi about page</h1>
  </Layout>
)

export default About
