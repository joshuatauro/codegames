import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Knowmore.css'
const DevCon = () => {
  return (
    <div className="cg__km">
      <div className="cg__km__container">
        <div className="cg__km__img_container">
          <img src="https://images3.alphacoders.com/177/thumbbig-177515.webp" alt="" />
        </div>
        <div className="cg__km__details">
          <h1 className="cg__km__title">DevCon</h1>
          <p className="cg__km__para">Having realised how much gaming helps students in teamwork, critical thinking and quick response, Valorant gaming competition is oragnised for the interested students to meet with fellow gamers in the college and have fun in a competitive sphere. Exciting cash prizes are awarded to the winning teams</p>
          <div className="cg__km__detail">
            <p>TEAM TYPE:</p>
            <p>INDIVIDUAL </p>
          </div>
          <div className="cg__km__detail">
            <p>REGISTRATION FEE'S:</p>
            <p>Rs 50 </p>
          </div>
          <div className="cg__km__detail">
            <p>INCHARGE:</p>
            <p>Joshua Tauro, 9686310532 </p>
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

export default DevCon