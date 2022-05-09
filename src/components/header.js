import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as style from "../components/css/navbar.module.scss"
import Logo from "../images/logo.jpg"

const Header = ({ siteTitle }) => (
  <header className="header-home">
    <div className="container">
      <nav className={style.mainnav}>
        <img className={style.headerlogo} src={Logo} alt="logo" />
        <ul>
          <li>
            <Link to="/" activeStyle={{ color: "rgb(140,231,139)" }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" activeStyle={{ color: "rgb(140,231,139)" }}>
              About
            </Link>
          </li>
          <li>
            <Link to="/gallery" activeStyle={{ color: "rgb(140,231,139)" }}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/contact" activeStyle={{ color: "rgb(140,231,139)" }}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
