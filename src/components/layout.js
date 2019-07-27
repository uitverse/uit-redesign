import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./navbar"
import Sidebar from "./sidebar"
import Footer from "./footer"
import "../styles/layout.scss"

const Layout = ({ addMargin, addSidebar, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Navbar siteTitle={data.site.siteMetadata.title} />
      <main className={addMargin ? "marginPadded" : ""}>
        {addSidebar ? <Sidebar items={addSidebar} /> : ``}
        <div>{children}</div>
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
