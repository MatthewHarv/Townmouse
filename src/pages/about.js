import React, { Component } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Landingcover from "../components/landingimg/aboutimage"

export default class about extends Component {
  render() {
    return (
      <Layout>
        <Seo title="About" />
        <Landingcover></Landingcover>
        <h1>Hi about page </h1>
      </Layout>
    )
  }
}
