import React, { Component } from "react"
import * as style from "../components/css/testimonials.module.scss"
import TestimonialTemplate from "./templates/testimonialTemplate"

const testimonials = [
  {
    id: 0,
    name: "Meghan Dawson",
    description:
      "Had the caprese smashed avocado. Great portion size. Was seasoned really nicely with lemon, onion, salt and pepper. The balsamic glaze paired well with the cheese. Also ordered a hazelnut latte. Coffee was prepared really nicely and not scalding hot. Would recommend as a great place for brunch. Lots of seating up front and larger tables out back for groups. Service always friendly.",
  },
  {
    id: 1,
    name: "Cherry Ang",
    description:
      "The food is awesome, there is a lot to choose from (finally a cafe where the counter food is actually good!) which includes vegan options too. The staff is always very friendly, even at busy times.",
  },
  {
    id: 2,
    name: "Zak Mataa",
    description:
      "Checked out Town Mouse for the first time during lockdown. We tried the double smashed burgers and potato skins which is basically a larger and more delicious version of a big mac combo. We will definitely be going back try out the rest of their menu. Their snickers slice is also next level.",
  },
  {
    id: 3,
    name: "Ben Jameson",
    description:
      "Great range of food with tasty and healthy alternatives to your standard cafe fare. Always tasty and great coffee. Smiling and friendly staff.  Busy atmosphere with three different dining areas with room for kids, strollers and all that. Thumbs up.",
  },
]

export default class Testimonials extends Component {
  render() {
    return (
      <div className={style.background}>
        <div className={style.container}>
          <div>
            <h1 className={style.testimonialsHeader}>Testimonials</h1>

            <TestimonialTemplate data={testimonials}></TestimonialTemplate>
          </div>
        </div>
      </div>
    )
  }
}
