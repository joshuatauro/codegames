import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Knowmore.css'
const InstaFun = () => {
  return (
    <div className="cg__km">
      <div className="cg__km__container">
        <div className="cg__km__img_container">
          <img src="https://images3.alphacoders.com/177/thumbbig-177515.webp" alt="" />
        </div>
        <div className="cg__km__details">
          <h1 className="cg__km__title">Insta Fun</h1>
          <p className="cg__km__para">The most exciting Instagram crossword puzzle is here for you!! 
Check your technical vocabulary and instantaneously solve the crosswords to win exciting cash prizes!! Let's see how quick and smart you are!!!</p>
          <div className="cg__km__detail">
            <p>TEAM TYPE:</p>
            <p>INDIVIDUAL </p>
          </div>
          <div className="cg__km__detail">
            <p>INCHARGE:</p>
            <p>Rohith C, 8431782443 </p>
          </div>
          <Link to="/register">
            <button className="cg__km__btn">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default InstaFun