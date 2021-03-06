import React from "react"
import { Link } from "gatsby"

import "../styles/index.scss"

const Footer = () => {
  return (
    <div>
        <ul className="footer__div">
          <li>
            <Link to="/">
              <img src="https://img.icons8.com/material-rounded/24/00aeef/home.png" />Home
            </Link>
          </li>
	  <li>
	    <Link to="/donasi">
	      <img src="https://img.icons8.com/material-rounded/24/00aeef/love.png" />Program
	    </Link>
	  </li>
	  <li>
	    <Link to="/berita">
	      <img src="https://img.icons8.com/material-rounded/24/00aeef/news.png" />Berita
	    </Link>
	  </li>
	  <li>
	  <Link to="/donasi_saya">
	    <img src="https://img.icons8.com/pastel-glyph/24/00aeef/box--v2.png" />Donasi Saya
	  </Link>
	  </li>
        </ul>
      </div>
  )
}

export default Footer
