import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import LoadingScreen from "react-loading-screen"
import Darkmode from "../../darkmode-js";

import Navbar from "./navbar"
import Sidebar from "./sidebar"
import Footer from "./footer"
import "../styles/layout.scss"

import relations from "../../data/relations"

const Layout = ({ addMargin, addSidebar, children }) => {
  const [isLoading, toggleLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      toggleLoading(!isLoading)
    }, 100)
    new Darkmode({
      mixColor: '#fff', // default: '#fff'
      backgroundColor: '#fff',  // default: '#fff'
      buttonColorDark: '#100f2c',  // default: '#100f2c'
      buttonColorLight: '#fff', // default: '#fff'
      saveInCookies: false, // default: true,
      label: '🌓', // default: ''
      autoMatchOsTheme: true // default: true
    }).showWidget();
  }, [])
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const getRelations = name =>
    relations.find(sect => sect.section === name).content
  return (
    <LoadingScreen
      loading={isLoading}
      bgColor="#008080"
      spinnerColor="#9ee5f8"
      textColor="#676767"
    >
      <Navbar siteTitle={data.site.siteMetadata.title} />
      <main className={addMargin ? "marginPadded" : ""}>
        {addSidebar ? <Sidebar items={getRelations(addSidebar)} /> : ``}
        <div>{children}</div>
      </main>
      <Footer />
    </LoadingScreen>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
