import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Landingcover from "../components/landingimg/galleryimage"
import * as style from "../components/css/gallery.module.scss"
import GalleryTemplate from "../components/templates/galleryTemplate"
import { StaticImage } from "gatsby-plugin-image"

const data = [
  {
    id: 0,
    image: (
      <StaticImage
        src="../images/food/cabnet.jpg"
        alt="cabnet"
        formats={["AUTO", "AVIF"]}
      />
    ),
  },
  {
    id: 1,
    image: (
      <StaticImage
        src="../images/food/cabnet2.jpg"
        alt="cabnet2"
        formats={["AUTO", "AVIF"]}
      />
    ),
  },
  {
    id: 2,
    image: (
      <StaticImage
        src="../images/food/cabnet3.jpg"
        alt="cabnet3"
        formats={["AUTO", "AVIF"]}
      />
    ),
  },
  {
    id: 3,
    image: (
      <StaticImage
        src="../images/food/banana.jpg"
        alt="banana"
        formats={["AUTO", "AVIF"]}
      />
    ),
  },
  {
    id: 4,
    image: (
      <StaticImage
        src="../images/food/bacon.jpg"
        alt="bacon"
        formats={["AUTO", "AVIF"]}
      />
    ),
  },
  {
    id: 5,
    image: (
      <StaticImage
        src="../images/food/cake.jpg"
        alt="cake"
        formats={["AUTO", "AVIF"]}
      />
    ),
  },
  {
    id: 6,
    image: (
      <StaticImage
        src="../images/food/choc.jpg"
        alt="choc"
        formats={["AUTO", "AVIF"]}
      />
    ),
  },
  {
    id: 7,
    image: (
      <StaticImage
        src="../images/food/egg.jpg"
        alt="egg"
        formats={["AUTO", "AVIF"]}
      />
    ),
  },
  {
    id: 8,
    image: (
      <StaticImage
        src="../images/food/ginger.jpg"
        alt="ginger"
        formats={["AUTO", "AVIF"]}
      />
    ),
  },
  {
    id: 9,
    image: (
      <StaticImage
        src="../images/food/ham.jpg"
        alt="ham"
        formats={["AUTO", "AVIF"]}
      />
    ),
  },
  {
    id: 10,
    image: (
      <StaticImage
        src="../images/food/mushroom.jpg"
        alt="mushroom"
        formats={["AUTO", "AVIF"]}
      />
    ),
  },
  {
    id: 11,
    image: (
      <StaticImage
        src="../images/food/rings.jpg"
        alt="rings"
        formats={["AUTO", "AVIF"]}
      />
    ),
  },
  {
    id: 12,
    image: (
      <StaticImage
        src="../images/food/salad.jpg"
        alt="salad"
        formats={["AUTO", "AVIF"]}
      />
    ),
  },
  {
    id: 13,
    image: (
      <StaticImage
        src="../images/food/slice.jpg"
        alt="slice"
        formats={["AUTO", "AVIF"]}
      />
    ),
  },
  {
    id: 14,
    image: (
      <StaticImage
        src="../images/food/slice2.jpg"
        alt="slice2"
        formats={["AUTO", "AVIF"]}
      />
    ),
  },
  {
    id: 15,
    image: (
      <StaticImage
        src="../images/food/soup.jpg"
        alt="soup"
        formats={["AUTO", "AVIF"]}
      />
    ),
  },
  {
    id: 16,
    image: (
      <StaticImage
        src="../images/food/steak.jpg"
        alt="steak"
        formats={["AUTO", "AVIF"]}
      />
    ),
  },
  {
    id: 17,
    image: (
      <StaticImage
        src="../images/food/toast.jpg"
        alt="toast"
        formats={["AUTO", "AVIF"]}
      />
    ),
  },
  {
    id: 18,
    image: (
      <StaticImage
        src="../images/food/waffle.jpg"
        alt="waffle"
        formats={["AUTO", "AVIF"]}
      />
    ),
  },
  {
    id: 19,
    image: (
      <StaticImage
        src="../images/food/wrap.jpg"
        alt="wrap"
        formats={["AUTO", "AVIF"]}
      />
    ),
  },
  {
    id: 20,
    image: (
      <StaticImage
        src="../images/food/muffin.jpg"
        alt="wrap"
        formats={["AUTO", "AVIF"]}
      />
    ),
  },
]
const About = () => (
  <Layout>
    <Seo title="Gallery" />
    <Landingcover></Landingcover>
    <div className={style.container}>
      <h1 className={style.title}>Check out our products!</h1>
      <GalleryTemplate data={data}></GalleryTemplate>
    </div>
  </Layout>
)

export default About
