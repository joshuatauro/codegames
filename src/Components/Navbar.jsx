import React from 'react'
import '../CSS/Navbar.css'
const Navbar = () => {
  return (
    <nav className="cg__nav">
      <div className="cg__nav__container">
        <h1 className="cg__nav__title">DeCoders</h1>
        <div className="ui cg__nav__links">
          <li className="cg__nav__link"><h1>About</h1></li>
          <li className="cg__nav__link"><h1>Games</h1></li>
          <li className="cg__nav__link"><h1>Contact</h1></li>
        </div>
        <button className="cg__nav__btn">Register!</button>
      </div>
    </nav>
  )
}

export default Navbar