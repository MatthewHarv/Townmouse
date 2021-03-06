import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as style from "../components/css/navbar.module.scss"
import Logo from "../images/logo.jpg"

const Header = ({ siteTitle }) => (
  <header className={style.navContainer}>
    <nav className={style.mainnav}>
      <Link to="/" className={style.logoLink}>
        <img className={style.headerlogo} src={Logo} alt="logo" />
      </Link>

      <ul>
        <li>
          <Link
            className={style.navLink}
            to="/"
            activeStyle={{ color: "rgb(140,231,139)" }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={style.navLink}
            to="/about"
            activeStyle={{ color: "rgb(140,231,139)" }}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={style.navLink}
            to="/menu"
            activeStyle={{ color: "rgb(140,231,139)" }}
          >
            Menu
          </Link>
        </li>
        <li>
          <Link
            className={style.navLink}
            to="/gallery"
            activeStyle={{ color: "rgb(140,231,139)" }}
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            className={style.navLink}
            to="/contact"
            activeStyle={{ color: "rgb(140,231,139)" }}
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className={style.hamburgerContainer}>
        <input type="checkbox" className={style.toggler}></input>
        <div className={style.hamburger}>
          <div></div>
        </div>
        <div className={style.menu}>
          <div>
            <div>
              <ul className={style.navListHam}>
                <li>
                  <Link
                    className={style.navLinkHam}
                    to="/"
                    activeStyle={{ color: "rgb(140,231,139)" }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className={style.navLinkHam}
                    to="/about"
                    activeStyle={{ color: "rgb(140,231,139)" }}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className={style.navLinkHam}
                    to="/menu"
                    activeStyle={{ color: "rgb(140,231,139)" }}
                  >
                    Menu
                  </Link>
                </li>
                <li>
                  <Link
                    className={style.navLinkHam}
                    to="/gallery"
                    activeStyle={{ color: "rgb(140,231,139)" }}
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    className={style.navLinkHam}
                    to="/contact"
                    activeStyle={{ color: "rgb(140,231,139)" }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
