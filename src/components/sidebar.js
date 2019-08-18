import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Fade from "react-reveal/Fade"

import "../styles/sidebar.scss"

const Sidebar = ({ items }) => (
  <div className="sidebar">
    <Fade up cascade duration={300}>
      <ul>
        {items.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.link} alt={item.title} activeClassName="active">
                {item.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </Fade>
  </div>
)

Sidebar.propTypes = {
  items: PropTypes.array,
}

Sidebar.defaultProps = {
  items: [],
}

export default Sidebar
