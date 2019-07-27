import React from "react"

import "../styles/footer.scss"

const Footer = () => (
  <footer>
    <div className="footer--container">
      <p className="footer--description">
        *This webiste is an experimental university project, that doesn't belong
        to a company, an organization, or a government association. Reference
        contents are from <a href="http://uit.edu.mm">uit.edu.mm</a> and all
        technical contents are owned by the author, and team.
      </p>
      <hr />
      <span className="footer--copyright">Copyright &copy; 2019</span>
    </div>
  </footer>
)

export default Footer
