import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Fade from "react-reveal/Fade"

import "../styles/navbar.scss"

const Navbar = ({ siteTitle }) => {
  const [isOpen, toggleMenu] = useState(false);
  useEffect(()=>{
    if(isOpen) {
      document.getElementsByClassName("links")[0].classList.remove("hide");
    } else {
      document.getElementsByClassName("links")[0].classList.add("hide");
    }
  },[isOpen])

  return (
    <header className="navbar">
      <div className="logo">
        <div className="logo--title">
          <Link to="/" alt="uit homepage">
            {siteTitle}
          </Link>
        </div>
      </div>
      <div className="hamburger-menu" onClick={()=>toggleMenu(!isOpen)}>Menu</div>
      <Fade up cascade duration={300}>
        <div className="links hide">
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
          <Link
            to="/news"
            className="links--link"
            activeClassName="link-active"
          >
            News
          </Link>
          <Link
            to="/about"
            className="links--link"
            activeClassName="link-active"
          >
            About UIT
          </Link>
        </div>
      </Fade>
    </header>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
