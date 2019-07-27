import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "../styles/sidebar.scss"

const Sidebar = ({ items }) => (
  <div className="sidebar">
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
  </div>
)

Sidebar.propTypes = {
  items: PropTypes.array,
}

Sidebar.defaultProps = {
  items: [],
}

export default Sidebar
