import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Navbar.css'
const Navbar = () => {
  return (
    <nav className="cg__nav">
      <div className="cg__nav__container">
        <Link className="cg__nav__title" to="/">
          <h1 >DeCoders</h1>
        </Link>
        <div className="ui cg__nav__links">
          <li className="cg__nav__link"><h1>About</h1></li>
          <li className="cg__nav__link"><h1>Games</h1></li>
          <li className="cg__nav__link"><h1>Contact</h1></li>
        </div>
        <Link to="/register" className="cg__nav__btn">Register!</Link>
      </div>
    </nav>
  )
}

export default Navbar