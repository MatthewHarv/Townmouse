import React, { Component } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Landingcover from "../components/landingimg/menuimage"
import * as style from "../components/css/menu.module.scss"
import MenuTemplate from "../components/templates/menuTemplate"
const food = [
  {
    id: 0,
    item: "Salted Caramel Waffles",
    description:
      "Chocolate sauce & in-house made Hokey Pokey, Brown Sugar Meringue & Vanilla Crème.",
    price: "$17.5",
  },
  {
    id: 1,
    item: "Bacon Waffles",
    description: "Banana, Maple with Mascarpone Vanilla Crème.",
    price: "$18.50",
  },
  {
    id: 2,
    item: "Town Mouse Fried Chicken Waffles",
    description: "Bacon, Sage burnt butter & Maple syrup.",
    price: "$19.50",
  },
  {
    id: 3,
    item: "Breakfast Bacon Buddy",
    description:
      "Pokano bacon, Fried egg, Tomato chilli jam and Fresh rocket. With a choice of toasted Sourdough, Five Grain, or Gluten-Free bread.",
    price: "$17.50",
  },
  {
    id: 4,
    item: "Smashed Avocado",
    description:
      "Avocado smash with Tomato salsa, Chilli flakes & Rocket. With a choice of Sourdough, Five Grain or Gluten-Free bread.",
    price: "$16.50",
  },
  {
    id: 5,
    item: "Smashed Avocado",
    description:
      "Avocado smash with Tomato salsa, Chilli flakes & Rocket. With a choice of Sourdough, Five Grain or Gluten-Free bread.",
    price: "$16.50",
  },
  {
    id: 6,
    item: "Handmade Potato Skins",
    description: "Served with our special Truffie Mayo.",
    price: "$8.50",
  },
  {
    id: 7,
    item: "The Works",
    description:
      "Potato skins topped with Pokeno bacon, Cheese, Served with our special Truffle Mayo",
    price: "$12.50",
  },
  {
    id: 8,
    item: "Six-hour Cooked Beef Brisket Burger",
    description:
      "Fresh herb slaw with Jalapeno crème fresh. Available on Brioche Buns or Gluten Free Bread",
    price: "$19.50",
  },
  {
    id: 9,
    item: "Braised Lamb Burger",
    description:
      "Fresh herb slaw with Harissa mint yogurt dressing. Available on Brioche Buns or Gluten Free Bread",
    price: "$19.50",
  },
  {
    id: 10,
    item: "Town Mouse Fried Chicken",
    description:
      "Fresh herb slaw with Chipotle mayo. Available on Brioche Buns or Gluten Free Bread",
    price: "$19.50",
  },
  {
    id: 11,
    item: "Vegetarian Burger",
    description:
      "Vegetarian patty, fresh tomato, roast capsicum, freash herb slaw with Chipotle dressing. Available on Brioche Buns or Gluten Free Bread",
    price: "$19.50",
  },
  {
    id: 12,
    item: "BLT",
    description:
      "Pokeno Bacon, Avocado, Caramelised onion, fresh tomato salsa and cos lettuce. With a choice of Sourdough, Five Grain or Gluten-Free bread.",
    price: "$19.50",
  },
  {
    id: 13,
    item: "BLAT",
    description:
      "Pokeno Bacon, Avocado, Caramelised onion, Fresh tomato salsa and Cos lettuce. With a choice of Sourdough, Five Grain or Gluten-Free bread,",
    price: "$19.50",
  },
  {
    id: 14,
    item: "Braised Beef Sandwich",
    description:
      "Braised beef brisket, Caramelised onion, Roast capsicum. with Jalapeño crème fraiche and Fresh rocket. With a choice of Sourdough, Five Grain or Gluten-Free bread.",
    price: "$19.50",
  },
  {
    id: 15,
    item: "Chocolate Caramel Slice",
    description: "",
    price: "$6.50",
  },
  {
    id: 16,
    item: "Lemon and Coconut Slice",
    description: "",
    price: "$6.50",
  },
  {
    id: 17,
    item: "Banoffee Caramel Slice",
    description: "",
    price: "$6.90",
  },
  {
    id: 18,
    item: "Ferrero Rocher Slice",
    description: "",
    price: "$6.90",
  },
  {
    id: 19,
    item: "Braised Lamb Shoulder 200g",
    description:
      "Served with generous helping of creamy cheese crusted scalloped potatoes",
    price: "$19.50",
  },
  {
    id: 20,
    item: "Six Hour Cooked Beef Brisket",
    description:
      "Served with generous helping of creamy cheese crusted scalloped potatoes",
    price: "$19.50",
  },
  {
    id: 21,
    item: "Sous Vide Pork Belly",
    description:
      "Served with generous helping of creamy cheese crusted scalloped potatoes",
    price: "$19.50",
  },
]

const coffee = [
  {
    id: 0,
    item: "Espresso",
    price: "Small - $4",
  },
  {
    id: 1,
    item: "Long Black",
    price: "Small - $4, Medium - $4.50, Large - $4.90",
  },
  {
    id: 2,
    item: "Flat White",
    price: "Small - $4.50, Medium - $5.50, Large - $5.90",
  },
  {
    id: 3,
    item: "Cappuccino",
    price: "Small - $4.50, Medium - $5.50, Large - $5.90",
  },
  {
    id: 4,
    item: "Latte",
    price: "Small - $4.50, Medium - $5.50, Large - $5.90",
  },
  {
    id: 5,
    item: "Espresso Macchiato",
    price: "Small - $4.50, Medium - $4.50",
  },
  {
    id: 6,
    item: "Mochaccino",
    price: "Small - $5.50, Medium - $6.50, Large - $6.90",
  },
  {
    id: 7,
    item: "Matcha Latte",
    price: "Small - $4.50, Medium - $5.50, Large - $5.90",
  },
  {
    id: 8,
    item: "Turmeric Latte",
    price: "Small - $4.50, Medium - $5.50, Large - $5.90",
  },
  {
    id: 9,
    item: "Chai Latte",
    price: "Small - $4.50, Medium - $5.50, Large - $5.90",
  },
  {
    id: 10,
    item: "Hot Chocolate",
    price: "Small - $5.50, Medium - $5.90, Large - $6.50",
  },
  {
    id: 11,
    item: "Salted Caramel Hot Chocolate",
    price: "Small - $5.50, Medium - $5.90, Large - $6.50",
  },
]

const tea = [
  {
    id: 0,
    item: "Earl Grey",
    price: "$4",
  },
  {
    id: 1,
    item: "Special Breakfast",
    price: "$4",
  },
  {
    id: 2,
    item: "Sweet Sunday",
    price: "$4",
  },
  {
    id: 3,
    item: "Japanese Lime",
    price: "$4",
  },
  {
    id: 4,
    item: "Japanese Gen Mai Cha",
    price: "$4",
  },
  {
    id: 5,
    item: "Rooibos Orange Citrus",
    price: "$4",
  },
  {
    id: 6,
    item: "Fresh Mint",
    price: "$4",
  },
  {
    id: 7,
    item: "Fresh Lemon & Ginger",
    price: "$4",
  },
]

const juices = [
  {
    id: 0,
    item: "Vege Booster",
    description: "Apple, carrot, beetroot, celery & ginger",
    price: "$8.50",
  },
  {
    id: 1,
    item: "Apple Zinger",
    description: "Apple, pear, lemon & ginger",
    price: "$8.50",
  },
  {
    id: 2,
    item: "Citrus Spitz",
    description: "Orange, pineapple, lime, mint & soda",
    price: "$8.50",
  },
  {
    id: 3,
    item: "Orange Refresher",
    description: "Orange, carrot, pineapple & lemon",
    price: "$8.50",
  },
  {
    id: 4,
    item: "Green",
    description: "Apple, kale, spinach, herbs, cucumber",
    price: "$8.50",
  },
  {
    id: 5,
    item: "Spiced Tomato",
    description: "Tomato juice, worcester, kaitaia fire, pepper & celery",
    price: "$8.50",
  },
  {
    id: 6,
    item: "Orange Juicy Lucy",
    price: "$4.90",
  },
  {
    id: 7,
    item: "Apple Juicy Lucy",
    price: "$4.90",
  },
  {
    id: 8,
    item: "Jeijoa Smoothie Juicy Lucy",
    price: "$4.90",
  },
]

export default class about extends Component {
  render() {
    return (
      <Layout>
        <Seo title="Menu" />
        <Landingcover></Landingcover>
        <div className={style.aboutContainer}>
          <MenuTemplate
            teadata={tea}
            fooddata={food}
            coffeedata={coffee}
            juicedata={juices}
          ></MenuTemplate>
        </div>
      </Layout>
    )
  }
}
