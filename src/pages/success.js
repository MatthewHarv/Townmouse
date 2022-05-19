import React from "react"
import * as style from "../components/css/contact.module.scss"
import { useInView } from "react-intersection-observer"
import Layout from "../components/layout"
import Seo from "../components/seo"
export default function Contact() {
  const { ref, inView: descriptionIsVisible } = useInView()

  return (
    <Layout>
      <Seo title="Success" />
      <div className={style.outContact}>
        <div
          ref={ref}
          className={`${style.contactform2} ${
            descriptionIsVisible ? style.fadein : ""
          }`}
        >
          <div>
            <h1 className={style.title}>Thank you</h1>
            <div>
              <p className={style.description}>
                We will get back to you as soon as we can.
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </Layout>
  )
}

//  <Layout>
//  <Seo title="Contact" />
