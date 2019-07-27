import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import relations from "./relations"

const ContactPage = () => (
  <Layout addMargin addSidebar={relations}>
    <SEO title="Contact Us" />
    <h2>
      University of Information Technology, Parami Road, Hlaing Campus, Yangon,
      Myanmar
    </h2>
    <table width="100%">
      <tbody>
        <tr>
          <td>Phone:</td>
          <td>951-9664254 </td>
        </tr>
        <tr>
          <td> Fax :</td>
          <td> 951-664250</td>
        </tr>
        <tr>
          <td>Email:</td>
          <td>hr.admin@uit.edu.mm</td>
        </tr>

        <tr>
          <td>Website:</td>
          <td>www.uit.edu.mm</td>
        </tr>
      </tbody>
    </table>
    <br />
    <span>The nearest but-stop : AD, Pyay Road </span>
  </Layout>
)

export default ContactPage
