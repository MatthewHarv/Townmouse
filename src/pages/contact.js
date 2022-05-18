import React from "react"
import * as style from "../components/css/contact.module.scss"
import { useInView } from "react-intersection-observer"
import Layout from "../components/layout"
import Seo from "../components/seo"
export default function Contact() {
  const { ref, inView: descriptionIsVisible } = useInView()

  return (
    <Layout>
      <Seo title="Contact" />
      <div className={style.outContact}>
        <div
          ref={ref}
          className={`${style.contactform} ${
            descriptionIsVisible ? style.fadein : ""
          }`}
        >
          <div>
            <h1 className={style.contactTitle}>Contact Us</h1>
            <div>
              <p className={style.infoDescription}>
                Please use this contact form to leave us a message and we will
                get back to you as soon as we can.
              </p>

              <p className={style.infoDescription}>Phone: 09 239 1110</p>
              <p className={style.infoDescription}>
                Address: 191 King Street, Pukekohe 2120
              </p>
            </div>
          </div>
          <div>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              action="/success"
            >
              <input
                type="hidden"
                name="form-name"
                value="contact"
                aria-label="contactlabel"
              />
              <p className={style.hidden}>
                <label>
                  Don’t fill this out if you're human:
                  <input name="bot-field" aria-label="botlabel" />
                </label>
              </p>
              <div className="form-group">
                <label className={style.labelContainer}>
                  <input
                    name="name"
                    placeholder="Name"
                    type="text"
                    aria-label="namelabel"
                    className={style.input}
                    required
                  ></input>
                </label>
              </div>
              <div className="form-group">
                <label>
                  <input
                    placeholder="Email"
                    name="email"
                    type="email"
                    aria-label="emaillabel"
                    className={style.input}
                    required
                  ></input>
                </label>
              </div>
              <div className="form-group">
                <label>
                  <input
                    name="phone"
                    placeholder="Phone"
                    type="text"
                    aria-label="phonelabel"
                    className={style.input}
                    required
                  ></input>
                </label>
              </div>
              <div className="form-group">
                <label>
                  <textarea
                    name="message"
                    placeholder="Message"
                    aria-label="messagelabel"
                    className={style.inputMessage}
                    rows="7"
                    required
                  ></textarea>
                </label>
              </div>

              <div className={style.formButton}>
                <button type="submit" className={style.inputButton}>
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

//  <Layout>
//  <Seo title="Contact" />
