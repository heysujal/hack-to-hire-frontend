import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className=''>
      <Link to={''}>
              <img
          className="indigo-logo hover:transition-all ease-in-out hover:scale-110 duration-300"
          src="https://www.goindigo.in/content/dam/s6web/in/en/assets/logo/IndiGo_logo_2x.png"
          aria-label="Indigo Logo Image"
          alt="IndiGo Logo"
          loading="lazy"
        />
      
      
      </Link>

    </div>
  )
}

export default Header