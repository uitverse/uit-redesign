import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "../styles/navbar.scss"

const Navbar = ({ siteTitle }) => (
  <header className="navbar">
    <div className="logo">
      <div className="logo--title">
        <Link to="/" alt="uit homepage">
          {siteTitle}
        </Link>
      </div>
    </div>
    <div className="links">
      <Link
        to="/academic"
        className="links--link"
        activeClassName="link-active"
      >
        Academic
      </Link>
      <Link
        to="/research"
        className="links--link"
        activeClassName="link-active"
      >
        Research
      </Link>
      <Link
        to="/conferences"
        className="links--link"
        activeClassName="link-active"
      >
        Conferences
      </Link>
      <Link
        to="/collaboration"
        className="links--link"
        activeClassName="link-active"
      >
        Collaborations
      </Link>
      <Link to="/news" className="links--link" activeClassName="link-active">
        News
      </Link>
      <Link to="/about" className="links--link" activeClassName="link-active">
        About UIT
      </Link>
    </div>
  </header>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
