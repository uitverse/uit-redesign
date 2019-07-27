import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "../styles/notice.scss"

const Notice = ({ description, action }) => (
  <div className="notice">
    <p>{description}</p>
    {action ? (
      <Link to={action.link} alt="notice" className="notice--action">
        {action.title}
      </Link>
    ) : (
      ``
    )}
  </div>
)

Notice.propTypes = {
  description: PropTypes.string,
  action: PropTypes.object,
}

Notice.defaultProps = {
  description: ``,
}

export default Notice
