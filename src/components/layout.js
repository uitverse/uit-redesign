import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./navbar"
import Sidebar from "./sidebar"
import Footer from "./footer"
import "../styles/layout.scss"

import relations from "../../data/relations"

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
  const getRelations = name => relations.find(sect=> sect.section === name).content;

  return (
    <>
      <Navbar siteTitle={data.site.siteMetadata.title} />
      <main className={addMargin ? "marginPadded" : ""}>
        {addSidebar ? <Sidebar items={getRelations(addSidebar)} /> : ``}
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
